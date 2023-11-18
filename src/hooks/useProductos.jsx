import { getDolarValue } from "../services/apiProductos"

const useProductos = () => {
    const [producto, setProducto] = useState([])
    
    useEffect(() => {
        getDolarValue()
        .then((res) => setProducto(res.data.products))
        .catch((err) => console.log(err))
    }, [])

  return (
    <div>useProductos</div>
  )
}

export default useProductos