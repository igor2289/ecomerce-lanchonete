import { useState } from "react"
import BannerPerfil from "./Banner"
import Cardapio from "./Cardápio"
import HeaderPerfil from "./Header"

import Modal from "./Modal"
import type { PropsItem } from "./itemCardapio"
import Sidebar from "../Sidebars/SidebarCompra"

const Perfil = () => {
    const [itemSelecionado, setItemSelecionado] = useState<PropsItem | null>(null)
    const [modalAberto, setModalAberto] = useState(false)
    const [carrinhoAberto, setCarrinhoAberto] = useState(false)


    return(
    <>
    <HeaderPerfil />
    <BannerPerfil />
    <Cardapio onSelect={(item) => {
        setItemSelecionado(item)
        setModalAberto(true)
    }
    } />

    

    {modalAberto && itemSelecionado && (
        <Modal onAdd={() => {
            setCarrinhoAberto(true)
            setModalAberto(false)
        }} onClose={() => setItemSelecionado(null)} item={itemSelecionado} />
    )}

    {carrinhoAberto && itemSelecionado && (
        <Sidebar onClose={() => {
            setItemSelecionado(null)
            setCarrinhoAberto(false)
        }
        } produto={itemSelecionado} />
    )}

    </>
    )
}

export default Perfil