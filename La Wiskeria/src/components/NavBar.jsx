import React from 'react'
import logo from "../assets/logo1.jpg";
import CartWidget from './CartShop.jsx';


function Navbar() {
    return (
        
            <nav>
                <img style={{width:90}} src={logo} alt="logo1"/>                      
                <a href="/"> Inicio</a>
                <a href="/"> Tienda</a>
                <a href="/"> Servicios</a>
                <a href="/"> Contacto</a>
                <CartWidget />

            </nav>
        
            
        
        
    );
}

export default Navbar