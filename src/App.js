import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link

} from 'react-router-dom'
import './App.css';
import {Navbar, Nav} from 'react-bootstrap'

import About from './Components/About'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
function App() {
  // /about in anchor need to match the one in Route
  // Switch returns on on th routes
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>  |
          <Link to="/about">  About</Link>  |
          <Link to="/contact">  Contact</Link>  |
          <Link to="/gallery">  Gallery</Link>
        </nav>
        <Navbar bg="dark">
          <Navbar.Brand>LOGO</Navbar.Brand>
          <Nav>
            
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/gallery" component={Gallery}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
