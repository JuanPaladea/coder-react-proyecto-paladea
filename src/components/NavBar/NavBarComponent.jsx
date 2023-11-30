import "./NavBarComponent.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidgetComponent from "../CartWidget/CartWidgetComponent";
import { Link } from 'react-router-dom'
import { NavDropdown } from "react-bootstrap";

const NavBarComponent = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar justify-content-end">
                <Container fluid className="mx-3">
                    <Navbar.Brand>
                        <Link to="/">
                            <img
                                src="src\assets\img\logo.png"
                                className="d-inline-block logo-libelulis"
                                alt="logo Libelulis"
                            />
                        </Link>    
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-item mx-2 my-auto p-2 rounded" to="/">Inicio</Link>
                            <Link className="nav-item mx-2 my-auto p-2 rounded" to="/tienda">Tienda</Link>
                            <NavDropdown title="Categorías" id="basic-nav-dropdown" className="nav-item mx-2 my-auto p-2 rounded" >
                                {/* {category.map((category, index) => {
                                    return (<NavDropdown.Item key={index}>
                                        <Link
                                         to={`/category/${category}`}>
                                            <span className="categoria">{category}</span>
                                        </Link>
                                    </NavDropdown.Item>
                                )})} */}
                            </NavDropdown>
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