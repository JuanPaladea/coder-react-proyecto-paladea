import React from 'react'
import { Container } from 'react-bootstrap';
import useDolar from '../../hooks/useDolar';
import { useCart } from '../../context/CartContext';
import './CartComponent.scss'
import CartHeaderComponent from '../CartHeader/CartHeaderComponent';
import WavesOrangeComponent from '../WavesOrange/WavesOrangeComponent';
import { toast } from 'react-toastify';

export const CartComponent = () => {
    const {cart, deleteCart, removeFromCart} = useCart();
    const {dolar} = useDolar();
    const notify = (mensaje) => toast(mensaje)

    const handleDeleteButton = () => {
        deleteCart()
        notify('Carrito eliminado')
    }

    const handleDeleteItem = (item) => {
        removeFromCart(item.id)
        notify(`${item.name} eliminado del carrito`)
    }

    const handleBuyButton = () => {
        deleteCart()
        notify('Función a implementar')
    }

    const totalPrice = cart.items.reduce(
        (total, item) => total + ((item.price * item.quantity) * dolar),
        0
    );

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
                                    <p>Precio: ${((item.price * dolar) * item.quantity).toLocaleString()}</p>
                                    <button onClick={() => handleDeleteItem(item)}>Borrar item</button>
                                </div>
                    )})}
                </div>
                <div className='row'>
                    <h3 className='text-center mb-3'>TOTAL: ${totalPrice.toLocaleString()}</h3>
                </div>
                <div className='row'>
                    <button className='mx-auto mb-3 delete' onClick={handleDeleteButton}><h3>Borrar carrito</h3></button>
                    <button className='mx-auto mb-3 delete' onClick={handleBuyButton}><h3>Comprar carrito</h3></button>
                </div>
            </Container>
            )}
        </div>
    )
}

export default CartComponent