import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainerComponent from '../components/ItemListContainer/ItemListContainerComponent'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

export const Categorias = () => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {categoryId} = useParams()

    useEffect(() => {
        const db = getFirestore();

        const categoryQuery = query(
            collection(db, 'products'),
            where('category', '==', categoryId)
        )

        getDocs(categoryQuery)
        .then((snapshot) => {
            setProducto(
                snapshot.docs.map((doc) => ({ id: doc, ...doc.data()}))
            )
        }).catch(() => {
            setError(true)
        }).finally(setLoading(false))
    }, [categoryId])

    return (
        <div>
            <ItemListContainerComponent producto={producto}/>
        </div>
    )
}