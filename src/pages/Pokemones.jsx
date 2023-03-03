


const urlPokeapi = "https://pokeapi.co/api/v2/pokemon/";

const nombrePokemon = '3'

//funcion fetch de la API
const getPokemon = async () => {
    const response = await fetch(urlPokeapi + nombrePokemon);
    const data = await response.json();
    return data;
}




import React from 'react'

const Pokemones = () => {
  return (
    <div>
        <h1>Selecciona tu Pokemon</h1>

    </div>
  )
}

export default Pokemones

