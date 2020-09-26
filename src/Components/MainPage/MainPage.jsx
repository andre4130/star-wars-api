import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

//STYLING
import '../../App.css'
import { Container, CardColumns, Card, Button } from 'react-bootstrap';

//SERVICES
import userService from "../../services/user.service";
import { authenticationService } from '../../services/authentication-service'

// DATA
// import spaceships from '../../Data/spaceships.json';


function MainPage() {

    const [user, setUser] = useState({
        currentUser: authenticationService.currentUserValue,
        users: null
    });
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [spaceships, setSpaceships] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();

    const [content, setContent] = useState("");

    useEffect(() => {userService.getAll().then(users => setUser({ users }))},[]);

    const goToNext = () => (
        setCurrentPage(currentPage + 1)
    );
    const goToPrev = () => (
        setCurrentPage(currentPage - 1)
    );

    useEffect(() => {
        fetch("https://swapi.dev/api/starships/?page=" + currentPage)
            .then(res => res.json())
            .then(
                data => {
                    setSpaceships(data.results);
                    setNextPage(data.next);
                    setPrevPage(data.previous);
                    console.log(spaceships)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log("error!")
                }
            )
    }, []);

    const shipList = spaceships.map((ship, index) => (
        <Container>
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{ship.name}</Card.Title>
                        <Card.Text>
                         <b>Model:</b> {ship.model}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </Container>
    ));

    const {currentUser, users} = user;

    return (
        <Container className="MainPage">
            <h1>Hi {currentUser.firstName}!</h1>
            {content}
            {prevPage == null ? <Button onClick={() => goToPrev()} disabled> Previous Page </Button> : <Button onClick={() => goToPrev()}> Previous Page </Button>}
            {nextPage == null ? <Button onClick={() => goToNext()} disabled>{currentPage} Next Page </Button> : <Button onClick={() => goToNext()} disabled>{currentPage} Next Page </Button>}
            <hr/>
            {shipList}
        </Container>
    )
}
export default MainPage
