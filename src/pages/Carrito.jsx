import React from 'react'
import { useCart } from '../context/CartContext'
import useDolar from '../hooks/useDolar';

const Carrito = () => {
    const {cart} = useCart();
    const {dolar} = useDolar();

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.items.length === 0 ? 
            (
                <p>Your cart is empty</p>
            ) 
            : 
            (
            <ul>
            {cart.items.map((item) => {
                console.log(item)
                return (
                <li key={item.id}>
                <div>
                    <h4>{item.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price * dolar}</p>
                </div>
                </li>
            )})}
            </ul>
            )}
        </div>
    )
}

export default Carrito