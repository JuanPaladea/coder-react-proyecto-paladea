import "./NavBarComponent.scss"
import LogoComponent from "../Logo/LogoComponent"

const NavBarComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg pe-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="logo" src="src\assets\img\logo.png" alt="logo libelulis"/></a>
                    <div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3 rounded">
                                <a className="nav-link active" aria-current="page" href="#">
                                Inicio</a>
                            </li>
                            <li className="nav-item mx-3 rounded">
                                <a className="nav-link" href="./pages/tienda.html">
                                Tienda</a>
                            </li>
                            <li className="nav-item mx-3 rounded">
                                <a className="nav-link" href="./pages/nosotros.html">
                                Nosotros</a>
                            </li>
                            <li className="nav-item mx-3 rounded">
                                <a className="nav-link" href="./pages/contacto.html">
                                Contacto</a>
                            </li>
                            <li className="nav-item mx-3 rounded">
                                <a className="nav-link" href="./pages/talles.html">
                                Carrito</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBarComponent