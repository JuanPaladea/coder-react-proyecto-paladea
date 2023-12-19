import "./NavBarComponent.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidgetComponent from "../CartWidget/CartWidgetComponent";
import { Link } from 'react-router-dom'
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faHouse, faList, faStore } from "@fortawesome/free-solid-svg-icons";

const NavBarComponent = () => {

    return (
        <>
            <Navbar expand="lg" className="navbar justify-content-end">
                <Container fluid className="mx-3">
                    <Navbar.Brand>
                        <Link to="/">
                            <img
                                src="https://raw.githubusercontent.com/JuanPaladea/coder-react-proyecto-paladea/main/src/assets/img/logo.png"
                                className="d-inline-block logo-libelulis"
                                alt="logo Libelulis"
                            />
                        </Link>   
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-item mx-2 my-auto p-2 rounded text-center" to="/"><FontAwesomeIcon icon={faHouse} /><br />Inicio</Link>
                            <Link className="nav-item mx-2 my-auto p-2 rounded text-center" to="/tienda"><FontAwesomeIcon icon={faStore} /><br />Tienda</Link>
                            <NavDropdown title={<div><FontAwesomeIcon icon={faList}/><br/><span className="nav-item">Categorías</span></div>} id="basic-nav-dropdown" className="nav-item  text-center rounded">
                                <NavDropdown.Item>
                                    <Link
                                        to={`/category/buzo`}>
                                        <span className="categoria">Buzo</span>
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link
                                        to={`/category/campera`}>
                                        <span className="categoria">Campera</span>
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link
                                        to={`/category/remera`}>
                                        <span className="categoria">Remera</span>
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link className="nav-item mx-2 my-auto p-2 rounded text-center" to="/contacto"><FontAwesomeIcon icon={faAddressBook} /><br />Contacto</Link>
                            <Nav.Link className="nav-item mx-2 my-auto rounded">
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