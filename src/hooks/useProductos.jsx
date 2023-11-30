import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, getDoc, doc } from 'firebase/firestore'

export const useProductos = (collectionName) => {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        const db = getFirestore();

        const productsCollection = collection(db, collectionName)
        
        getDocs(productsCollection)
        .then((snapshot) => {
            setProducto(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })))
        }).catch(() => {
            setError(true)
        }).finally(setLoading(false))
    }, [])

    return {producto, loading, error}
}

export const useProductoUnico = (collectionName, id) => {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        const db = getFirestore();

        const singleProduct = doc(db, collectionName, id)
        
        getDoc(singleProduct)
        .then((snapshot) => {
            setProducto({id: snapshot.id, ...snapshot.data()})
        }).catch(() => {
            setError(true)
        }).finally(setLoading(false))
    }, [])

    return {producto, loading, error}
}

export default {useProductoUnico, useProductos}