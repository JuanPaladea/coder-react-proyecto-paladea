import "./NavBarComponent.scss"
import LogoComponent from "../Logo/LogoComponent"

const NavBarComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg pe-5">
                <div className="container-fluid">
                    <LogoComponent />
                    <ul className="navbar-nav ">
                        <li className="nav-item mx-3 rounded">
                            <a className="nav-link active" href="#">Inicio</a>
                        </li>
                        <li className="nav-item mx-3 rounded">
                            <a className="nav-link" href="#">Tienda</a>
                        </li>
                        <li className="nav-item mx-3 rounded">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item mx-3 rounded">
                            <a className="nav-link" href="#">Guia de Talles</a>
                        </li>
                        <li className="nav-item mx-3 rounded">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBarComponent