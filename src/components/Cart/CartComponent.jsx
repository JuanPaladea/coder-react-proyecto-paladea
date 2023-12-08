import React from 'react'
import { Container } from 'react-bootstrap';
import useDolar from '../../hooks/useDolar';
import { useCart } from '../../context/CartContext';
import './CartComponent.scss'
import CartHeaderComponent from '../CartHeader/CartHeaderComponent';
import WavesOrangeComponent from '../WavesOrange/WavesOrangeComponent';

export const CartComponent = () => {
    const {cart, deleteCart, removeFromCart} = useCart();
    const {dolar} = useDolar();

    const handleDeleteButton = () => {
        deleteCart()
    }

    const handleDeleteItem = (itemid) => {
        removeFromCart(itemid)
    }

    return (
        <div>
            <CartHeaderComponent />
            <WavesOrangeComponent />
            {cart.items.length === 0 ? 
            (
                <h2 className='text-center my-4'>El Carrito está vacío</h2>
            ) 
            : 
            (
            <Container>
                <div className='row text-center'>
                    {cart.items.map((item) => {
                        return (
                                <div className='col-12 my-4 item' key={item.id}>
                                    <img className='itemImg' src={item.img}/>
                                    <h4>{item.name}</h4>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio: ${item.price * dolar}</p>
                                    <button onClick={() => handleDeleteItem(item.id)}>Borrar item</button>
                                </div>
                    )})}
                </div>
                <div className='row'>
                    <button className='mx-auto mb-3 delete'><h3>Comprar carrito</h3></button>
                    <button className='mx-auto mb-3 delete' onClick={() => handleDeleteButton}><h3>Borrar carrito</h3></button>
                </div>
            </Container>
            )}
        </div>
    )
}

export default CartComponent