import { Card, Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react';



const CardR = () => {

    //useEffect para hacer la busqueda de pokemon
    useEffect(() => {
        getPokemon();
        getPokemonSpecies();
    }, []);

    const urlPokeapi = "https://pokeapi.co/api/v2/pokemon/";
    const urlPokeSpecies = "https://pokeapi.co/api/v2/pokemon-species/";
    const { id } = useParams();
    const [datosPokemon, setDatosPokemon] = useState("");
    const [datosPokemonSpecies, setDatosPokemonSpecies] = useState("");



    //funcion fetch de la API
    const getPokemon = async () => {
        const response = await fetch(urlPokeapi + id);
        const data = await response.json();
        setDatosPokemon(data);

    }

    //funcion fetch de la API para las especies
    const getPokemonSpecies = async () => {
        const response = await fetch(urlPokeSpecies + id);
        const data = await response.json();
        setDatosPokemonSpecies(data);
    }






    if (datosPokemon === "" || datosPokemonSpecies === "") {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    } else {
        return (
            <div>
                <Container className=''>
                    <Row className=''>
                        <Col className=''>
                <Card style={{ width: '80rem' }} className=' align-items-center '>
                    <Card.Img variant="top" src={datosPokemon.sprites.other["official-artwork"].front_default} className='w-50'/>
                    <Card.Body>
                        <Card.Title><h1>{datosPokemon.forms[0].name.charAt(0).toUpperCase()+datosPokemon.forms[0].name.slice(1)}</h1></Card.Title>
                        <Card.Text>
                            
                            {datosPokemonSpecies.flavor_text_entries[26].flavor_text}
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default CardR



