import "./NavBarComponent.scss"

const NavBarComponent = () => {
    return (
        <>
        <nav className="navbar">
            <a><img/></a>
            <div>
                <ul>
                    <li>
                        <a>Inicio</a>
                    </li>
                    <li >
                        <a>Tienda</a>
                    </li>
                    <li >
                        <a>Nosotros</a>
                    </li>
                    <li >
                        <a>Guia de Talles</a>
                    </li>
                    <li>
                        <a>Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBarComponent