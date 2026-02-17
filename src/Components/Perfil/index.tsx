import { useState } from "react"
import BannerPerfil from "./Banner"
import Cardapio from "./Cardápio"
import HeaderPerfil from "./Header"

import Sidebar from "../Sidebars/SidebarCompra"
import { useSelector } from "react-redux"
import type { RootReducer } from "../../store"
import Modal from "./Modal"
import type { PropsItem } from "./itemCardapio"


const Perfil = () => {

    const [modalAberto, setModalAberto] = useState(false)
    const [itemSelecionado, setItemSelecionado] = useState<PropsItem | null>(null)
    const { isOpen } = useSelector((state: RootReducer) => state.cart)

    return ( 
        <>
        {modalAberto && itemSelecionado && (
            <Modal onClose={() => {
            setModalAberto(false)
            }} item={itemSelecionado} />
        )}
         {isOpen && <Sidebar />}

    <HeaderPerfil />
    <BannerPerfil />
    <Cardapio onSelect={(item) => {
        setItemSelecionado(item)
        setModalAberto(true)
    }} />
        </>
    )
   
}



export default Perfil