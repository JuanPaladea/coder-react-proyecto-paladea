import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'

const ItemCountComponent = () => {
    const {state, setState} = useContext(CartContext)
    const [count, setCount] = useState(state)

    const handleAdd = () => {
        setCount(count + 1)
        setState(state + 1);
    }

    const handleDelete = () => {
        setCount(count - 1)
        setState(count - 1)
    }


    return (
        <div>
            <Button onClick={handleDelete}>-</Button>
            <p>{count}</p>
            <Button onClick={handleAdd}>+</Button>
        </div>
  )
}

export default ItemCountComponent