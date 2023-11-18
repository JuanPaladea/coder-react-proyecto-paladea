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
                                className="d-inline-block"
                                alt="logo Libelulis"
                            />
                        </Link>    
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* <Nav.Link className="nav-item active mx-2 rounded" href="#home">Inicio</Nav.Link> */}
                            <Link className="nav-item mx-2 my-auto p-2 rounded" to="/">Inicio</Link>
                            <Link className="nav-item mx-2 my-auto p-2 rounded" to="/tienda">Tienda</Link>
                            <NavDropdown title="Categorías" id="basic-nav-dropdown" className="nav-item mx-2 my-auto p-2 rounded" >
                                <NavDropdown.Item>
                                    <Link to="category/buzos">
                                        <span className="categoria">Buzos</span>
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="category/remeras">
                                        <span className="categoria">Remeras</span>
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="category/camperas">
                                        <span className="categoria">Camperas</span>
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link className="nav-item mx-2 my-auto p-2 rounded" to="/contacto">Contacto</Link>
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