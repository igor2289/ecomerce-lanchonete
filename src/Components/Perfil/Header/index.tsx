import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../../store'
import { useNavigate } from 'react-router-dom'

import logo from '../../../assets/Hero.png'
import { Cabeçalho, CartButton } from './styles'
import { open } from '../../../store/reducers/cart'


const HeaderPerfil = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }

    return(
    <header>
        <Cabeçalho>
        <div>
        <ul>
            <li><p>Restaurante</p></li>
            <li><img onClick={() => navigate('/')} src={logo} alt="" /></li>
            <CartButton onClick={openCart}><p>{items.length} produtos(s) no carrinho</p></CartButton>
        </ul>
        </div>
    </Cabeçalho>
    </header>
)
}

export default HeaderPerfil