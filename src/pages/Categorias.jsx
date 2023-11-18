import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainerComponent from '../components/ItemListContainer/ItemListContainerComponent'
import axios from "axios";
import useProductos from '../hooks/useProductos';

const Categorias = () => {
    const {categoryId} = useParams()
    const {producto} = useProductos(categoryId)

    return (
        <div>
            <ItemListContainerComponent producto={producto}/>
        </div>
    )
}

export default Categorias