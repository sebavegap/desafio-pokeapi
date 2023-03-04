import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react';



const CardR = () => {

    //useEffect para hacer la busqueda de pokemon
    useEffect(() => {
        getPokemon();
    }, []);

    const urlPokeapi = "https://pokeapi.co/api/v2/pokemon/";
    const { id } = useParams();
    const [datosPokemon, setDatosPokemon] = useState("");



    //funcion fetch de la API
    const getPokemon = async () => {
        const response = await fetch(urlPokeapi + id);
        const data = await response.json();
        setDatosPokemon(data);

    }






    if (datosPokemon === "") {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    } else {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>{datosPokemon.forms[0].name}</Card.Title>
                        <Card.Text>
                            texto
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CardR



