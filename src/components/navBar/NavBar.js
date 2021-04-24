import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () =>{
    return(
        <div>
            <h1>Titulo</h1>
            <ul>
                <li><p>Parte1</p></li>
                <li><p>Parte2</p></li>
                <li><p>Parte3</p></li>
            
            </ul>
            <CartWidget/>
        </div>
    )
}
export default NavBar