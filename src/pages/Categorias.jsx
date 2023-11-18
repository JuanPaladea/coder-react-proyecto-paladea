import React, { useEffect, useState } from 'react'
import useDolar from '../hooks/useDolar'
import { useParams } from 'react-router-dom'
import ItemListContainerComponent from '../components/ItemListContainer/ItemListContainerComponent'
import axios from 'axios'

const Categorias = () => {
    const {dolar} = useDolar()    
    const {categoryId} = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
        .then((res) => setProducto(res.data.products))
        .catch((err) => console.log(err))
    }, [categoryId])

    return (
        <div>
            <ItemListContainerComponent/>
        </div>
    )
}

export default Categorias