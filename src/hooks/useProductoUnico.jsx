import { useEffect, useState } from "react"
import axios from "axios"

function useProductoUnico(id) {
    const [producto, setProducto] = useState([])

    useEffect(() => {
        axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => setProducto(res.data))
        .catch((err) => console.log(err))
    }, [id])
    return {producto}
}

export default useProductoUnico