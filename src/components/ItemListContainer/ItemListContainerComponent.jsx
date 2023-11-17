import "./ItemListContainerComponent.scss"
import Container from 'react-bootstrap/Container';
import useDolar from "../../hooks/useDolar";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const ItemListContainerComponent = () => {
    const {dolar} = useDolar()    
    const [producto, setProducto] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products/10")
        .then((res) => setProducto[res.data])
        .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <Container fluid>
                
            </Container>
        </>
    )
}

export default ItemListContainerComponent;