import {NavLink} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import React from 'react'

const Navigation = () => {

  //función que recibe un objeto con la propiedad isActive del componente NavLink
  //y retorna la clase que se le asignará al componente si isActive es true
  //al ser true, el componente NavLink tiene la clase active, esto seleccionará la clase del css
const setActiveClass = ({ isActive }) =>  (isActive) ? 'active' : 'inactive' ;

  return (
    <div>
        <Navbar className='navigation p-3 fixed-top'>
      {/* con el componente NavLink y isActive, podemos cambiar atributos dependiendo de si
      no encontramos en esa página o no */}
        <NavLink className={ setActiveClass } to='/'>
            Home
            </NavLink>
        <NavLink className={ setActiveClass } to='/pokemones'>
            Pokemones
            </NavLink>
            </Navbar>
    </div>
  )
}

export default Navigation