import React, { useState, useEffect } from 'react';

//STYLING
import '../../App.css'
import { Container, CardColumns, Card, Button } from 'react-bootstrap';

// DATA
import spaceships from '../../Data/spaceships.json';


function MainPage() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();

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
                    setItems(data.results);
                    setNextPage(data.next);
                    setPrevPage(data.previous);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log("error!")
                }
            )
    }, [goToNext, goToPrev]);





    const shipList = items.map((ship, index) => (
        <Container>
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{ship.name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </Container>

    ))

    return (
        <Container className="MainPage">
            {prevPage == null ? <Button onClick={() => goToPrev()} disabled> Previous Page </Button> : <Button onClick={() => goToPrev()}> Previous Page </Button>}
            {nextPage == null ? <Button onClick={() => goToNext()} disabled>{currentPage} Next Page </Button> : <Button onClick={() => goToNext()}>{currentPage} Next Page </Button>}
            <hr/>
            {shipList}
        </Container>
    )
}
export default MainPage
