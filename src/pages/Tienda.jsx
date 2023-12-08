import React from 'react'
import ItemListContainerComponent from '../components/ItemListContainer/ItemListContainerComponent'
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';
import { useProductos } from '../hooks/useProductos';
import TiendaHeaderComponent from '../components/TiendaHeader/TiendaHeaderComponent';
import WavesOrangeComponent from '../components/WavesOrange/WavesOrangeComponent';

export const Tienda = () => {    
    const {producto, loading, error} = useProductos('products')

    return (
        <div>
            <TiendaHeaderComponent/>
            <WavesOrangeComponent />
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