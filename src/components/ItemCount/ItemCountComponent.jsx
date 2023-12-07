import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import "./ItemCountComponent.scss"

const ItemCountComponent = ({producto}) => {
    const {cart, addToCart} = useContext(CartContext)
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleDelete = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const handleAddButton = () => {
        addToCart({...producto, quantity: count})
        setCount(0)
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