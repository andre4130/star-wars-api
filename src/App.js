import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import '../src/assets/images/milky2.jpg'

// components
import Login from './Components/Login/Login';
import MainPage from './Components/MainPage/MainPage';
import Characters from './Components/Characters/Characters';
import Register from './Components/Register/Register';


//Styles
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">x</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Login</Nav.Link>
          <Nav.Link href="/MainPage">Spaceships</Nav.Link>
          <Nav.Link href="/Characters">Characters</Nav.Link>
        </Nav>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/MainPage" component={MainPage} />
          <Route exact path="/Characters" component={Characters} />
          <Route exact path="/Register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
