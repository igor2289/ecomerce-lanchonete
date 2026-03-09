import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Perfil from "./Components/Perfil";
import SidebarPayment from "./Components/Sidebars/SidebarPayment";
import SidebarSucess from "./Components/Sidebars/SidebarSucess";
import SidebarEntrega from "./Components/Sidebars/SidebarEntrega";

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/restaurante/:id" element={<Perfil />} >
        <Route path="delivery" element={<SidebarEntrega />} />
        <Route path="payment" element={<SidebarPayment />} />
        <Route path="success" element={<SidebarSucess />} />
        </Route>
        
    </Routes>
)

export default Rotas
