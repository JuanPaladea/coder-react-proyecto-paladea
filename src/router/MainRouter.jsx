import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Tienda } from  "../pages/Tienda";
import { Contacto } from  "../pages/Contacto";
import NavBarComponent from "../components/NavBar/NavBarComponent";

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/tienda" element={<Tienda />}/>
                <Route path="/contacto" element={<Contacto />}/>
            </Routes>
        </BrowserRouter>
    ) 
}