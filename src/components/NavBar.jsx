import React from 'react'
import logo from "../assets/logo1.jpg";
import CartWidget from './CartShop.jsx';


function Navbar() {
    return (
    <nav>
        <img style={{width:90}} src={logo} alt="logo1"/>
                <ul>

                    <li> Inicio</li>
                    <li> Tienda</li>
                    <li> Servicios</li>
                    <li> Contacto</li>
                </ul>
                <CartWidget />
            </nav>
    );
}

export default Navbar