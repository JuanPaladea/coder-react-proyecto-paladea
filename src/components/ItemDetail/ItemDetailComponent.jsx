import React from 'react'
import { Container } from 'react-bootstrap'
import useDolar from '../../hooks/useDolar'

const ItemDetailComponent = ({producto}) => {
    const {dolar} = useDolar()

    return (
        <Container >
            <div className="row gy-2 text-center tienda-productos my-2">
                <div className="col-6 col-lg-4" key={producto.id}>
                    <img src={producto.images} alt={producto.title} />
                    <p>{producto.title}</p>
                    <p>{producto.description}</p>
                    <p>Precio: ${producto.price * dolar}</p>
                </div>
            </div>
        </Container>
    )
}

export default ItemDetailComponent