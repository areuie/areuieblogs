// A component is a function which returns a jsx template (exported at the bottom of the file)
//sfc (tab)

//two curly braces mean: first one is dynamic, second one says that it is a javascript object (it is a javascript file)

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Alisa's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor:"#f1356d",
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;