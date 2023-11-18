import React from 'react';
import "./HeaderComponent.scss";
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <header className="banner">
            <div className="titulo rounded p-4">
                <h1 className="p-3">Libelulis</h1>
                <p className="p-3">¡Bienvenidos a nuestra página oficial! Explora nuestra seleción de ropa, diseñada para destacar tu estilo único y brindarte la máxima comodidad.</p>
                <Link to="/Tienda" className="px-3"><button className="comprar-button p-3 rounded">Tienda</button></Link>
            </div>
        </header>
    )
}

export default HeaderComponent