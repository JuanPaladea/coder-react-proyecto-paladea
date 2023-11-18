import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailComponent from '../components/ItemDetail/ItemDetailComponent'
import axios from 'axios'
import useProductoUnico from '../hooks/useProductoUnico'

const Item = () => {
    const {id} = useParams()
    const {producto} = useProductoUnico(id)

     return (
        <div>
            <ItemDetailComponent producto={producto}/>
        </div>
    )
}

export default Item