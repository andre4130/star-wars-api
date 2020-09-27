import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import '../src/assets/images/milky2.jpg'

// components
import Login from './Components/Login/Login';
import MainPage from './Components/MainPage/MainPage';
import Characters from './Components/Characters/Characters';
import Register from './Components/Register/Register';
import CharacterDetail from './Components/CharacterDetail/CharacterDetail';


//Styles
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  const LoginContainer = () => (
    <div>
      <Route path="/" component={Login} />
    </div>
  );

  const RegisterContainer = () => (
    <div>
      <Route exact path="/Register" component={Register} />
    </div>
  );

  const DefaultContainer = () => (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">x</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Logout</Nav.Link>
          <Nav.Link href="/MainPage">Spaceships</Nav.Link>
          <Nav.Link href="/Characters">Characters</Nav.Link>
        </Nav>
      </Navbar>
      <Router>
        <Switch>
          <Route exact path="/MainPage" component={MainPage} />
          <Route exact path="/Characters" component={Characters} />
          <Route path="/people/:characterID" component={CharacterDetail} />
        </Switch>
      </Router>
    </div>
  )

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/Register" component={RegisterContainer}/>
          <Route component={DefaultContainer} />
        </div>
      </Switch>
    </Router>
  );
}
export default App;
