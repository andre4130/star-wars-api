import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import '../src/assets/images/milky2.jpg'

// components
import Login from './Components/Login/Login';
import MainPage from './Components/MainPage/MainPage';
import Characters from './Components/Characters/Characters';
// import Register from './Components/Register/Register';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute';

//Styles
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Services and Helpers 
import { history } from './Helpers/history';
import { authenticationService } from './services/authentication-service';

const App = () => {

  const [currentUser, setCurrentUser] = useState(
    {currentUser:null}
  )

  useEffect(() => {authenticationService.currentUser.subscribe(x => setCurrentUser({ currentUser: x }))},[]);

  const logout = () => {
    authenticationService.logout();
    history.push('/');
}

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">x</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Login</Nav.Link>
          <Nav.Link href="/MainPage">Spaceships</Nav.Link>
          <Nav.Link href="/Characters">Characters</Nav.Link>
          {currentUser &&
          <Nav.Link href="/">
            <a onClick={logout}>Logout</a>
          </Nav.Link>
          }
        </Nav>
      </Navbar>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/MainPage" component={MainPage} />
          <Route exact path="/MainPage" component={MainPage} />
          <Route exact path="/Characters" component={Characters} />
          {/* <Route exact path="/Register" component={Register} /> */}
        </Switch>
      </Router>
    </div>
  );
}
export default App;
