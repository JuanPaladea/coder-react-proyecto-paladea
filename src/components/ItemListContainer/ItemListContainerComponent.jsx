import "./ItemListContainerComponent.scss"
import Container from 'react-bootstrap/Container';
import useDolar from "../../hooks/useDolar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemListContainerComponent = () => {
    const {dolar} = useDolar()    
    const [producto, setProducto] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
        .then((res) => setProducto(res.data.products))
        .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <Container >
                <div className="row gy-2 text-center tienda-productos my-2">
                    {producto.map((producto) => {
                        return (
                            <div className="col-6 col-lg-4" key={producto.id}>
                                <Link><img src={producto.images[1]} alt={producto.title} /></Link>
                                <p>{producto.title}</p>
                                <p>{producto.price * dolar}</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </>
    )
}

export default ItemListContainerComponent;