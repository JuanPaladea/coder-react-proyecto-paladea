import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailComponent from '../components/ItemDetail/ItemDetailComponent'
import { useProductoUnico } from '../hooks/useProductos'

export const Item = () => {
    const {id} = useParams()
    const {producto} = useProductoUnico('products', id)

     return (
        <div>
            <ItemDetailComponent producto={producto}/>
        </div>
    )
}