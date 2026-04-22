import { useState } from "react"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

import BannerPerfil from "./Banner"
import Cardapio from "./Cardápio"
import HeaderPerfil from "./Header"
import Sidebar from "../Sidebars/SidebarCompra"
import Modal from "./Modal"

import type { RootReducer } from "../../store"
import type { PropsItem } from "./itemCardapio"


const Perfil = () => {

    const [openModal, setOpenModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState<PropsItem | null>(null)
    const { isOpen } = useSelector((state: RootReducer) => state.cart)

    return ( 
        <>
        {openModal && selectedItem && (
            <Modal onClose={() => {
            setOpenModal(false)
            }} item={selectedItem} />
        )}
         {isOpen && <Sidebar />}

        <HeaderPerfil />
        <BannerPerfil />
        <Cardapio onSelect={(item) => {
            setSelectedItem(item)
            setOpenModal(true)
        }} />
        <Outlet />
        </>
    )
   
}



export default Perfil