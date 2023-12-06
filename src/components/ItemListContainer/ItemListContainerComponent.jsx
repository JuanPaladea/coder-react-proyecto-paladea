import "./ItemListContainerComponent.scss"
import Container from 'react-bootstrap/Container';
import useDolar from "../../hooks/useDolar";
import { Link } from "react-router-dom";
import ItemCountComponent from "../ItemCount/ItemCountComponent";

const ItemListContainerComponent = ({producto}) => {
    const {dolar} = useDolar();

    return (
        <>
            <Container >
                <div className="row gy-2 text-center tienda-productos my-2">
                    {producto.map((product) => {
                        return (
                            <div className="col-6 col-lg-4 my-4" key={product.id}>
                                <Link to={`/item/${product.id}`}><img src={product.img} alt={product.name} /></Link>
                                <p>{product.name}</p>
                                <p>Precio: ${product.price * dolar}</p>
                                <ItemCountComponent />
                            </div>
                        )
                    })}
                </div>
            </Container>
        </>
    )
}

export default ItemListContainerComponent;