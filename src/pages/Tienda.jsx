import React from 'react'
import ItemListContainerComponent from '../components/ItemListContainer/ItemListContainerComponent'
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
import { useProductos } from '../hooks/useProductos';

export const Tienda = () => {    
    const {producto, loading, error} = useProductos('products')

    return (
        <div>
            {loading ? (
                <LoaderComponent />
            ) : error ? (
                'hubo un error'
            ) : (
                <ItemListContainerComponent producto={producto} />
            )}
        </div>
    )
}