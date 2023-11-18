import { useEffect, useState } from "react"
import axios from "axios"

function useProductos(category) {
    const [producto, setProducto] = useState([])
    const url = category ? `https://dummyjson.com/products/category/${category}` : "https://dummyjson.com/products/";

    useEffect(() => {
        axios
        .get(url)
        .then((res) => setProducto(res.data.products))
        .catch((err) => console.log(err))
    }, [category])
    return {producto}
}

export default useProductos