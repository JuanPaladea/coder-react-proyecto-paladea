import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidgetComponent = () => {
    const {state, useState} = useContext(CartContext)

    return (
        <>
            <FontAwesomeIcon className="my-auto" icon="fa-solid fa-cart-shopping" style={{color: "#ffffff",}} /> <span className=''>{state}</span>
        </>
    )
}

export default CartWidgetComponent