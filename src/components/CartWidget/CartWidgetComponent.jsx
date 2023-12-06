import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CartWidgetComponent = () => {
    const {state, useState} = useContext(CartContext)

    return (
        <>
            <FontAwesomeIcon className="my-auto" icon={faCartShopping} /> <span className=''>{state}</span>
        </>
    )
}

export default CartWidgetComponent