import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../../store'
import { useNavigate } from 'react-router-dom'

import logo from '../../../assets/Hero.png'
import { open } from '../../../store/reducers/cart'

import { Cabeçalho } from './styles'

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
        <div className='container'>
        <ul>
            <li><p>Restaurante</p></li>
            <li><img onClick={() => navigate('/')} src={logo} alt="" /></li>
            <li className='openCart' onClick={openCart}><p>{items.length} produtos(s) no carrinho</p></li>
        </ul>
        </div>
        </Cabeçalho>
    </header>
)
}

export default HeaderPerfil