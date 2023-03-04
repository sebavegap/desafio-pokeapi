
//import de hooks
import  { useState } from 'react';
import { useNavigate} from 'react-router-dom';
//import necesarios de react-bootstrap
import { Form, Button } from 'react-bootstrap';







const Pokemones = () => {

   

        //useState para guardar valor del dropdown
const [nombrePokemon, setNombrePokemon] = useState('');

const navigate = useNavigate();



//captura de valor del dropdown
const capturarDropdown = (e) => {
    console.log(e.target.value);
    setNombrePokemon(e.target.value);
}

 //funcion para navegar a la ruta de personajes al concatenar el id dentro de la ruta
 const irAPokemon = () => {
    if (nombrePokemon !== "")
    navigate(`/pokemones/${nombrePokemon}`);
};



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

        <Button onClick={irAPokemon}>Buscar</Button>




    </div>
  )
}

export default Pokemones

