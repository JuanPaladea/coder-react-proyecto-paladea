import React, { useEffect, useState } from 'react'
import ItemListContainerComponent from '../components/ItemListContainer/ItemListContainerComponent'
import useProductos from '../hooks/useProductos';

export const Tienda = () => {    
    const {producto} = useProductos()

    return (
        <div>
            <ItemListContainerComponent producto={producto} />
        </div>
    )
}