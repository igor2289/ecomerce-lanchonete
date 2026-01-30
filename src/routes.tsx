import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Perfil from "./Components/Perfil";
import SidebarEntrega from "./Components/Sidebars/SidebarEntrega";
import SidebarPayment from "./Components/Sidebars/SidebarPayment";
import SidebarSucess from "./Components/Sidebars/SidebarSucess";

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Perfil />} />
        <Route path="/entrega" element={<SidebarEntrega />} />
        <Route path="/payment" element={<SidebarPayment />} />
        <Route path="/success" element={<SidebarSucess />} />
    </Routes>
)

export default Rotas
