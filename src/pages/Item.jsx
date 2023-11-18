import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailComponent from '../components/ItemDetail/ItemDetailComponent'
import axios from 'axios'

const Item = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {
        axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => setProducto(res.data))
        .catch((err) => console.log(err))
    }, [id])
    
     return (
        <ItemDetailComponent producto={producto}/>
    )
}

export default Item