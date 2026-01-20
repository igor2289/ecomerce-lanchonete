import logo from '../../../assets/Hero.png'
import { Cabeçalho } from './styles'

const HeaderPerfil = () => (
    <div className="container">
        <Cabeçalho>
        <ul>
            <li><p>Restaurante</p></li>
            <li><img src={logo} alt="" /></li>
            <li><p>0 produtos(s) no carrinho</p></li>
        </ul>
    </Cabeçalho>
    </div>
)

export default HeaderPerfil