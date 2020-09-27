import React, { useState, useEffect } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';


//STYLING
import '../../App.css'
import { Container, CardColumns, Card, Button } from 'react-bootstrap';


// DATA
// import spaceships from '../../Data/spaceships.json';


function MainPage() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [spaceships, setSpaceships] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const goToNext = () => (
        setCurrentPage(currentPage + 1)
    );

    const goToPrev = () => (
        setCurrentPage(currentPage - 1)
    );


    //this is the inital fetch, the dependency is an empty array, which means it will only fetch when the page is loaded
    useEffect(() => {
        fetch("https://swapi.dev/api/starships/?page=1")
            .then(res => res.json())
            .then(
                data => {
                    setSpaceships(data.results);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log("error!", error)
                }
            )
    }, []);


    //Fetch Function will fetch the server everytime the user changes the page
    async function fetchFunction() {
        await fetch("https://swapi.dev/api/starships/?page=" + currentPage)
            .then(res => res.json())
            .then(
                data => {
                    setSpaceships(data.results);
                    // setNextPage(data.next);
                    // setPrevPage(data.previous);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log("error!")
                }
            )
    }

    useEffect(() => {
        console.log("in use effect", currentPage, spaceships);
        fetchFunction();
    }, [currentPage]);

    const shipList = spaceships.map((ship, index) => (
        <Card key={index} bg="dark" text="white">
            <Card.Body>
                <Card.Title><h3>{ship.name}</h3></Card.Title>
                <Card.Text>
                    <b>Model:</b> {ship.model}
                </Card.Text>
                <Card.Text>
                    <b>Manufacturer:</b> {ship.manufacturer}
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <Container className="MainPage mt-3">
            <div>
                {currentPage === 1 ? <Button className="m-1 secondary" onClick={() => goToPrev()} disabled> Previous Page </Button> : <Button className="m-1 secondary" onClick={() => goToPrev()}> Previous Page </Button>}
                <Button className="m-1" variant="dark"  > {currentPage} </Button>
                {currentPage === 4 ? <Button className="m-1 secondary" onClick={() => goToNext()} disabled> Next Page </Button> : <Button className="m-1 secondary" onClick={() => goToNext()}> Next Page </Button>}
            </div>
            <hr />
            <Container>
                <CardColumns>
                    {shipList}
                </CardColumns>
            </Container>
        </Container>
    )
}
export default MainPage
