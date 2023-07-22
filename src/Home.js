//the convention is to use handle....
//do handleClick when it is actually onClick, when you do handleClick(), it is automatically invoking handleClick()


import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    //let name = 'alisa'; //the variable is not reactive so when it changes, it doesn't trigger react to update the value (hook --> useState)
    //make a property name beside BlogList (blogs={blogs} is a prop)
    const {data: blogs /*Call it blogs in this context*/, isPending, error} = useFetch('http://localhost:8000/blogs');

    //fetching the data, then you update the state, check if it has a value, and then pass it through what you see on screen
    

      //we don't store it in a const as it doesn't return anything //makes sure that the function only runs after the inital render

    return (
        <div className="home"> 
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/*This is a prop*//>}
            {error && <div>{error}</div>}
            {/*Conditonal templating, if it is true then it moves to the right side and evaluates it (outputs it to the screen)*/} 
        </div> 
    );
}
 
export default Home; 