import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

//Styling 
import { Button, Card } from 'react-bootstrap';



const CharacterDetail = ({id}) => {

    const characterID = id

    console.log(characterID)

    const [data, setData] = useState();

    useEffect(() => {
        fetch("http://swapi.dev/api/people/1/")
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
                setData(response);
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <div className="container mt-5">
            <Card bg="dark" text="white">
    <Card.Header> <h1>{window.location.pathname}</h1> </Card.Header>
                <Card.Body>
                    <Card.Title > Card Title </Card.Title>
                    <Card.Text>
                      Here it would be the rest of the information inside the card
      </Card.Text>
      <div className="linkButton">
        <Link to="/Characters">
                <Button>
                    Back to Characters
                    </Button>
        </Link>
      </div>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CharacterDetail