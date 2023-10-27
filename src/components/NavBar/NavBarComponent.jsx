import "./NavBarComponent.scss"

const NavBarComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg pe-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="logo" src="src\assets\img\logo.png" alt="logo libelulis"/></a>
                    <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3 rounded">
                                <a className="nav-link active" aria-current="page" href="#"> <i className="fa-sharp fa-solid fa-house "></i>
                                Inicio</a>
                            </li>
                            <li className="nav-item mx-3 rounded">
                                <a className="nav-link" href="./pages/tienda.html"><i className="fa-sharp fa-solid fa-store"></i>
                                Tienda</a>
                            </li>
                            <li className="nav-item mx-3 rounded">
                                <a className="nav-link" href="./pages/nosotros.html"><i className="fa-sharp fa-solid fa-address-card"></i>
                                Nosotros</a>
                            </li>
                            <li className="nav-item mx-3 rounded">
                                <a className="nav-link" href="./pages/talles.html"><i className="fa-sharp fa-solid fa-ruler-horizontal"></i>
                                Guia de Talles</a>
                            </li>
                            <li className="nav-item mx-3 rounded">
                                <a className="nav-link" href="./pages/contacto.html"><i className="fa-sharp fa-solid fa-message"></i>
                                Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBarComponent