import React, { useState, useEffect } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';

//STYLING
import '../../App.css'
import { Container, CardColumns, Card, Button } from 'react-bootstrap';
import CharacterDetail from '../CharacterDetail/CharacterDetail';


function Characters() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

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
        fetch("https://swapi.dev/api/people/?page=1")
            .then(res => res.json())
            .then(
                data => {
                    setCharacters(data.results);
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
        await fetch("https://swapi.dev/api/people/?page=" + currentPage)
            .then(res => res.json())
            .then(
                data => {
                    setCharacters(data.results);
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
        console.log("in use effect", currentPage, characters);
        fetchFunction();
    }, [currentPage]);

    const charactersList = characters.map((character, index) => (
        <Card id={index} bg="dark" text="white">
            <Card.Body>
                <Card.Title><h3>{character.name}</h3></Card.Title>
                <Card.Text>
                    <b>Height:</b> {character.height}
                </Card.Text>
                <Card.Text>
                    <b>Mass:</b> {character.mass}
                </Card.Text>
                <Card.Text>
                    <b>Grender:</b> {character.gender}
                </Card.Text>
                <Link to={`/people/${character.name}`} id={character.url}>
                    <Button type="button" id={character.url}>
                        See Details
                </Button>
                </Link>
            </Card.Body>
        </Card>
    ))

    return (
        <Container className="CharacterPage mt-3">
            {currentPage === 1 ? <Button className="mr-1" onClick={() => goToPrev()} disabled> Previous Page </Button> : <Button className="mr-1" onClick={() => goToPrev()}> Previous Page </Button>}
            {currentPage === 1 ? <Button className="mr-1 ml-1" variant="secondary" onClick={() => goToPage(1)} > 1 </Button> : <Button className="mr-1 ml-1" variant="primary" onClick={() => goToPage(1)} > 1 </Button>}
            {currentPage === 2 ? <Button className="mr-1 ml-1" variant="secondary" onClick={() => goToPage(2)} > 2 </Button> : <Button className="mr-1 ml-1" variant="primary" onClick={() => goToPage(2)} > 2 </Button>}
            {currentPage === 3 ? <Button className="mr-1 ml-1" variant="secondary" onClick={() => goToPage(3)} > 3 </Button> : <Button className="mr-1 ml-1" variant="primary" onClick={() => goToPage(3)} > 3 </Button>}
            {currentPage === 4 ? <Button className="mr-1 ml-1" variant="secondary" onClick={() => goToPage(4)} > 4 </Button> : <Button className="mr-1 ml-1" variant="primary" onClick={() => goToPage(4)} > 4 </Button>}
            {currentPage === 5 ? <Button className="mr-1 ml-1" variant="secondary" onClick={() => goToPage(5)} > 5 </Button> : <Button className="mr-1 ml-1" variant="primary" onClick={() => goToPage(5)} > 5 </Button>}
            {currentPage === 6 ? <Button className="mr-1 ml-1" variant="secondary" onClick={() => goToPage(6)} > 6 </Button> : <Button className="mr-1 ml-1" variant="primary" onClick={() => goToPage(6)} > 6 </Button>}
            {currentPage === 7 ? <Button className="mr-1 ml-1" variant="secondary" onClick={() => goToPage(7)} > 7 </Button> : <Button className="mr-1 ml-1" variant="primary" onClick={() => goToPage(7)} > 7 </Button>}
            {currentPage === 8 ? <Button className="mr-1 ml-1" variant="secondary" onClick={() => goToPage(8)} > 8 </Button> : <Button className="mr-1 ml-1" variant="primary" onClick={() => goToPage(8)} > 8 </Button>}
            {currentPage === 9 ? <Button className="mr-1 ml-1" variant="secondary" onClick={() => goToPage(9)} > 9 </Button> : <Button className="mr-1 ml-1" variant="primary" onClick={() => goToPage(9)} > 9 </Button>}
            {currentPage === 9 ? <Button className="ml-1" onClick={() => goToNext()} disabled> Next Page </Button> : <Button className="ml-1" onClick={() => goToNext()}> Next Page </Button>}
            <hr />
            <Container>
                <CardColumns>
                    {charactersList}
                </CardColumns>
            </Container>
        </Container>
    )
}

export default Characters
