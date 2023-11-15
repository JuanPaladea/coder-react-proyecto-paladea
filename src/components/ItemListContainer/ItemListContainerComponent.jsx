import "./ItemListContainerComponent.scss"
import Container from 'react-bootstrap/Container';

const ItemListContainerComponent = ({greeting}) => {
    return (
        <>
            <Container fluid className="greeting rounded">
                {greeting}
            </Container>
        </>
    )
}

export default ItemListContainerComponent;