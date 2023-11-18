import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const CartWidgetComponent = () => {
    const [carrito, setCarrito] = useState(0)

    return (
        <>
            <FontAwesomeIcon className="my-auto" icon="fa-solid fa-cart-shopping" style={{color: "#ffffff",}} /> <span className=''>{carrito}</span>
        </>
    )
}

export default CartWidgetComponent