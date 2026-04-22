import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

import logo from '../../../assets/Hero.png'
import type { RootReducer } from '../../../store'
import { open } from '../../../store/reducers/Carrinho/cart'

import * as s from './styles'

const HeaderPerfil = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }

    return(
        <header>
            <s.Header>
                <div className='container'>
                    <ul>
                        <li><s.HeaderItem>Restaurante</s.HeaderItem></li>
                        <li><img onClick={() => navigate('/')} src={logo} alt="" /></li>
                        <li className='openCart' onClick={openCart}><s.CartCounting> {items.length} <FaShoppingCart color='#fff' size={24} /></s.CartCounting></li>
                    </ul>
                </div>
            </s.Header>
        </header>
)
}

export default HeaderPerfil