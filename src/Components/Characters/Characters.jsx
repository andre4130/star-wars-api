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

    const goToPage = (num) => (
        setCurrentPage(num)
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
    }, []);

    const charactersList = characters.map((character, index) => (
                <Card>
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text>
                            <b>Model:</b> {character.model}
                        </Card.Text>
                        <Card.Text>
                            <b>Height:</b> {character.height}
                        </Card.Text>
                        <Card.Text>
                            <b>Mass:</b> {character.mass}
                        </Card.Text>
                        <Card.Text>
                            <b>Grender:</b> {character.gender}
                        </Card.Text>
                    </Card.Body>
                </Card>
    ))

    return (
        <Container className="MainPage">
            {currentPage === 1 ? <Button onClick={() => goToPrev()} disabled> Previous Page </Button> : <Button onClick={() => goToPrev()}> Previous Page </Button>}
            <Button onClick={() => goToPage(1)} > 1 </Button>
            <Button onClick={() => goToPage(2)} > 2 </Button>
            <Button onClick={() => goToPage(3)} > 3 </Button>
            <Button onClick={() => goToPage(4)} > 4 </Button>
            <Button onClick={() => goToPage(5)} > 5 </Button>
            <Button onClick={() => goToPage(6)} > 6 </Button>
            <Button onClick={() => goToPage(7)} > 7 </Button>
            <Button onClick={() => goToPage(8)} > 8 </Button>
            <Button onClick={() => goToPage(9)} > 9 </Button>
            {currentPage === 9 ? <Button onClick={() => goToNext()} disabled>{currentPage} Next Page </Button> : <Button onClick={() => goToNext()}>{currentPage} Next Page </Button>}
            <hr/>
            <Container>
            <CardColumns>
            {charactersList}
            </CardColumns>
        </Container>
        </Container>
    )
}

export default Characters
