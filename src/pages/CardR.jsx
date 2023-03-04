import { Card, Container, Row, Col } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react';



const CardR = () => {

  

    const urlPokeapi = "https://pokeapi.co/api/v2/pokemon/";
    const urlPokeSpecies = "https://pokeapi.co/api/v2/pokemon-species/";
    const { id } = useParams();
    const [datosPokemon, setDatosPokemon] = useState("");
    const [datosPokemonSpecies, setDatosPokemonSpecies] = useState("");
    const navigate = useNavigate();

      //useEffect para hacer la busqueda de pokemon
      useEffect(() => {
        getPokemon();
        getPokemonSpecies();
    }, [id]
    );
 

//funcion para navegar al pokemon anterior de la lista
const irAPokemonAnterior = () => {
    if (id > 1) {
        navigate(`/pokemones/${parseInt(id) - 1}`);
    }
}

//funcion para navegar al pokemon siguiente de la lista
const irAPokemonSiguiente = () => {
    if (id < 151) {
        navigate(`/pokemones/${parseInt(id) + 1}`);
    }
}




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
                <Card  className=' align-items-center w-auto h-100'>
                    <Card.Img variant="top" src={datosPokemon.sprites.other["official-artwork"].front_default} className='w-auto h-100'/>
                    <Card.Body>
                        <Card.Title><h1>{datosPokemon.forms[0].name.charAt(0).toUpperCase()+datosPokemon.forms[0].name.slice(1)}</h1></Card.Title>
                        <Card.Text>
                            <br></br>
                            {datosPokemonSpecies.flavor_text_entries[26].flavor_text}
                            <br></br>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </Col>
                </Row>
                </Container>
                <br></br>
                <Row className=''>
                    {/* dos botones de bootstrap */}
                    <Col className=''>
                        <button className="btn btn-primary" onClick={irAPokemonAnterior}>Anterior</button>
                    </Col>
                    <Col className=''>
                        <button className="btn btn-primary" onClick={irAPokemonSiguiente}>Siguiente</button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CardR



