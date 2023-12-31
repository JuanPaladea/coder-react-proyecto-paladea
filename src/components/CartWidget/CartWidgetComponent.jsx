import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './CartWidgetComponent.scss';

const CartWidgetComponent = () => {
    const {cart} = useContext(CartContext)

    const total = cart.items.reduce((total, item) => total + item.quantity, 0)

    return (
        <>
            <div className='icon text-center'>
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#fff"}}/>
                <p className='total'>{total}</p>
            </div>
        </>
    )
}

export default CartWidgetComponent