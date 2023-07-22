import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); //represents history, go backwards or forward arrows

    const handleSubmit = (e) => { // prevent default action of the page refreshing when u press submit
        e.preventDefault();
        setIsPending(true);

        const blog = {title, body, author};

        fetch('http://localhost:8000/blogs',{
            method: 'POST', //post request
            headers: {"Content-Type": "application/json"}, //content type that is being sent, tells server what type of content is being sent (json data)
            body: JSON.stringify(blog) //automatically will add id property
        }).then(() => {
            setTimeout(() => {
                console.log("new blog added")
                setIsPending(false);
                history.push('/');
            }, 1000);
        }) //fetch request

    } //send a post request to an end point that the json server provides us with

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {isPending && <button disabled>Adding Blog...</button>} 
                {!isPending && <button>Add Blog</button>} 
                {/* Either submit or click event */}
            </form>
        </div>
    );
}
 
export default Create;