import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import NavBarComponent from "../components/NavBar/NavBarComponent";

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Inicio />}/>
            </Routes>
        </BrowserRouter>
    ) 
}