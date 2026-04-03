import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Perfil from "./Components/Perfil";
import { Checkout } from "./models/checkout";

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/restaurante/:id" element={<Perfil />} >
        <Route path="checkout" element={<Checkout/>} />
        </Route>
    </Routes>
)

export default Rotas
