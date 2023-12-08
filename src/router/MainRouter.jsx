import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Tienda } from  "../pages/Tienda";
import { Contacto } from  "../pages/Contacto";
import { Item } from "../pages/Item";
import { Categorias } from "../pages/Categorias";
import NavBarComponent from "../components/NavBar/NavBarComponent";
import Carrito from "../pages/Carrito";
import FooterComponent from "../components/Footer/FooterComponent";

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/tienda" element={<Tienda />}/>
                <Route path="/category/:categoryId" element={<Categorias />}/>
                <Route path="/item/:id" element={<Item />} />
                <Route path="/contacto" element={<Contacto />}/>
                <Route path="/carrito" element={<Carrito/>} />
            </Routes>
            <FooterComponent/>
        </BrowserRouter>
    ) 
}