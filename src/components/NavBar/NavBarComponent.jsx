import "./NavBarComponent.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidgetComponent from "../CartWidget/CartWidgetComponent";
import { Link } from 'react-router-dom'

const NavBarComponent = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar justify-content-end" style={{ width: "100%" }}>
                <Container fluid className="mx-3">
                    <Navbar.Brand href="#home">
                        <img
                            src="src\assets\img\logo.png"
                            className="d-inline-block"
                            alt="React Bootstrap logo"
                        />    
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* <Nav.Link className="nav-item active mx-2 rounded" href="#home">Inicio</Nav.Link> */}
                            <Link className="nav-item mx-2 my-auto p-2 rounded" to="/">Inicio</Link>
                            <Nav.Link className="nav-item mx-2 rounded" href="#link">Tienda</Nav.Link>
                            <Nav.Link className="nav-item mx-2 rounded" href="#nosotros">Nosotros</Nav.Link>
                            <Nav.Link className="nav-item mx-2 rounded" href="#contacto">Contacto</Nav.Link>
                            <Nav.Link className="nav-item mx-2 my-auto rounded" href="#carrito">
                                <CartWidgetComponent />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBarComponent