import { useEffect, useState } from "react"
import { getCategories } from "../services/apiProductos"

const useCategory = (categoryId) => {
    const [category, setCategory] = useState([])
    
    useEffect(() => {
        getCategories()
        .then((res) => setCategory(res.data))
        .catch((err) => console.log(err))
    }, [categoryId])
    
    return {category}
}

export default useCategory