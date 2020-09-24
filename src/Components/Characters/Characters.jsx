import React, { useState, useEffect } from 'react';

//STYLING
import '../../App.css'
import { Container, CardColumns, Card, Button } from 'react-bootstrap';


function Characters() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [characters, setCharacters] = useState([]);
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
        fetch("https://swapi.dev/api/people/?page=" + currentPage)
            .then(res => res.json())
            .then(
                data => {
                    setCharacters(data.results);
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

    const shipList = characters.map((character, index) => (
        <Container>
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text>
                            <b>Model:</b> {character.model}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </Container>
    ))

    return (
        <div>
        <Container className="MainPage">
            {prevPage == null ? <Button onClick={() => goToPrev()} disabled> Previous Page </Button> : <Button onClick={() => goToPrev()}> Previous Page </Button>}
            {nextPage == null ? <Button onClick={() => goToNext()} disabled>{currentPage} Next Page </Button> : <Button onClick={() => goToNext()} disabled>{currentPage} Next Page </Button>}
            <hr/>
            {shipList}
        </Container>
        </div>
    )
}

export default Characters
