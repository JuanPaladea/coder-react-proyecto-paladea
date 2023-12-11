import React from 'react'
import { Container } from 'react-bootstrap'
import useDolar from '../../hooks/useDolar'
import './ItemDetailComponent.scss'
import ItemCountComponent from '../ItemCount/ItemCountComponent'

const ItemDetailComponent = ({producto}) => {
    const {dolar} = useDolar()

    return (
        <Container >
            <div className="row gy-2 text-center tienda-productos my-2">
                <div className="row" key={producto.id}>
                    <div className='col-4'>
                        <img className='itemImg' src={producto.img} alt={producto.title} />
                    </div>
                    <div className='col-8 my-auto'>
                        <h2>{producto.name}</h2>
                        <h3>{producto.description}</h3>
                        <h4>Precio: ${(producto.price * dolar).toLocaleString()}</h4>
                        <ItemCountComponent producto={producto}/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ItemDetailComponent