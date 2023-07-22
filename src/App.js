import Navbar from './Navbar'; //current directory, navbar
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; //use the browser router that we imported as the name Router 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Navbar/>
        <div className="content">
          <Switch> 
            <Route exact path="/" /*The path after the url etc alisawu.ca/something  */> 
              <Home></Home> {/* Show the home component inside the content div when we visit "/"*/}
            </Route>
            <Route  path="/create">
              <Create/>
            </Route>
            <Route  path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*"> 
              {/* It is a catch all route, must be put at the bottom */}
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;
