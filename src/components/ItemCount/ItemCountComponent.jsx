import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import "./ItemCountComponent.scss"
import { toast } from 'react-toastify'

const ItemCountComponent = ({producto}) => {
    const {cart, addToCart} = useContext(CartContext)
    const [count, setCount] = useState(0)
    const notify = (mensaje) => toast(mensaje)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleDelete = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const handleAddButton = () => {
        if (count > 0) {
            addToCart({...producto, quantity: count})
            setCount(0)
            notify(`${count} de ${producto.name} agregado al carrito`)
        } else {
            notify('Cantidad inválida')
        }
    }

    return (
        <div>
            <div className='count'>
                <button onClick={handleDelete}>-</button>
                <h5>{count}</h5>
                <button onClick={handleAdd}>+</button>
            </div>
            <div className='add'>
                <button onClick={handleAddButton}><h5>Agregar al carrito</h5></button>
            </div>
        </div>
  )
}

export default ItemCountComponent