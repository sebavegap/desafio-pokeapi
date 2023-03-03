
//import de hooks
import  { useState } from 'react';
//import necesarios de react-bootstrap
import { Form, Button, Card } from 'react-bootstrap';







const Pokemones = () => {

    const urlPokeapi = "https://pokeapi.co/api/v2/pokemon/";

        //useState para guardar valor del dropdown
const [nombrePokemon, setNombrePokemon] = useState('');


//funcion fetch de la API
const getPokemon = async () => {
    const response = await fetch(urlPokeapi + nombrePokemon);
    const data = await response.json();
    return data;
 
}


//captura de valor del dropdown
const capturarDropdown = (e) => {
    console.log(e.target.value);
    setNombrePokemon(e.target.value);
}



  return (
    <div>
        <h1>Selecciona tu Pokemon</h1>
        <Form >
        <fieldset>
          <Form.Group className="mb-3" >
            <Form.Select id="Select" onChange={capturarDropdown}>
              <option value={''}>Gen I</option>
              <option value={"1"}>Bulbasaur</option>
              <option value={"2"}>Ivysaur</option>
              <option value={"3"}>Venasaur</option>
            </Form.Select>
            </Form.Group>
        </fieldset>
        </Form>

        <Button onClick={getPokemon}>Buscar</Button>

        {/* Card de react bootstrap */}
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
    </Card.Body>
    </Card>



    </div>
  )
}

export default Pokemones

