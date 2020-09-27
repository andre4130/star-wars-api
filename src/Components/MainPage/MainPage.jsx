import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

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

    useEffect(() =>{
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


    async function fetchFunction () {
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

                <Card key={index}>
                    <Card.Body>
                        <Card.Title>{ship.name}</Card.Title>
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
        <Container className="MainPage">
            <div>
            {currentPage === 1 ? <Button className="m-1 secondary" onClick={() => goToPrev()} disabled> Previous Page </Button> : <Button className="m-1 secondary" onClick={() => goToPrev()}> Previous Page </Button>}
            <Button className="m-1" variant="dark"  > {currentPage} </Button>
            {currentPage === 4 ? <Button className="m-1 secondary" onClick={() => goToNext()} disabled> Next Page </Button> : <Button className="m-1 secondary" onClick={() => goToNext()}> Next Page </Button>} 
            </div>
            <hr/>
            <Container>
            <CardColumns>
            {shipList}
            </CardColumns>
        </Container>
        </Container>
    )
}
export default MainPage
