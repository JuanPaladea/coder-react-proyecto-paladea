import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import "./ItemCountComponent.scss"

const ItemCountComponent = () => {
    const {state, setState} = useContext(CartContext)
    const [count, setCount] = useState(state)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleDelete = () => {
        setCount(count - 1)
    }

    const handleAddButton = () => {
        setState(count)
        setCount(0)
    }

    return (
        <div>
            <div className='count'>
                <Button onClick={handleDelete}>-</Button>
                <p>{count}</p>
                <Button onClick={handleAdd}>+</Button>
            </div>
            <div className='add'>
                <Button onClick={handleAddButton}>Agregar al carrito</Button>
            </div>
        </div>
  )
}

export default ItemCountComponent