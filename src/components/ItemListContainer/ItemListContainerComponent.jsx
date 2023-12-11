import "./ItemListContainerComponent.scss"
import Container from 'react-bootstrap/Container';
import useDolar from "../../hooks/useDolar";
import { Link } from "react-router-dom";
import ItemCountComponent from "../ItemCount/ItemCountComponent";

const ItemListContainerComponent = ({producto}) => {
    const {dolar} = useDolar();

    return (
        <>
            <Container>
                <div className="row gy-2 text-center tienda-productos my-2">
                    {producto.map((product) => {
                        return (
                            <div className="col-6 col-lg-4 my-4" key={product.id}>
                                <Link to={`/item/${product.id}`}><img src={product.img} alt={product.name} /></Link>
                                <h3>{product.name}</h3>
                                <h4>Precio: ${(product.price * dolar).toLocaleString()}</h4>
                                <ItemCountComponent producto={product}/>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </>
    )
}

export default ItemListContainerComponent;