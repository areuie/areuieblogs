import { Link } from "react-router-dom";

//don't directly edit the blogs prop, instead use the setBlogs method so put it in home to directly edit the data easily
const BlogList = ({blogs, title}) => {
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author} </p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;