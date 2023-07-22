import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
    const {id} = useParams(); //grab route parameters from the route
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method:'DELETE' //asking json server to delete with this id
            //async function
        }).then(() => { //why is this () => and not directly just write in the functions
              history.push('/');
        });
    }
//the colon allows data to be referred to blog as well
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <div>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button> 
                    {/* QUESTION: why is this handleClick and not ()=>handleClick */}
                </div>
            )}
        </div>
    );
}
 
export default BlogDetails;