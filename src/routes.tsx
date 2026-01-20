import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Perfil from "./Components/Perfil";
import Modal from "./Components/Perfil/Modal";
import Sidebar from "./Components/Sidebars/SidebarCompra";
import SidebarEntrega from "./Components/Sidebars/SidebarEntrega";
import SidebarPayment from "./Components/Sidebars/SidebarPayment";
import SidebarSucess from "./Components/Sidebars/SidebarSucess";

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/carrinho" element={<Sidebar />} />
        <Route path="/entrega" element={<SidebarEntrega />} />
        <Route path="/payment" element={<SidebarPayment />} />
        <Route path="/success" element={<SidebarSucess />} />
    </Routes>
)

export default Rotas
