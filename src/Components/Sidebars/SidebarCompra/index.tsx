import imageSidebar from '../../../assets/2d191807374d0118af6a26d9cdb2300a285d481a.png'
import Perfil from '../../Perfil'
import * as styled from './styles'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()

    return(
        <>
        <Perfil />
        <div className="viewport-shadow">
        <styled.ContainerSidebar>
            <styled.Produto>
            <styled.PizzaSidebar src={imageSidebar} alt="" />
           <styled.DescricaoProduto>
             <h3>Pizza Marguerita</h3>
            <p>R$ 60,90</p>
           </styled.DescricaoProduto>
            <styled.BotaoRemover onClick={() => navigate('/modal')}><i className="bi bi-trash3"></i></styled.BotaoRemover>
        </styled.Produto>
        <styled.ValorTotal>
            <p>Valor Total</p>
            <p>R$ 60,90</p>
        </styled.ValorTotal>
        <styled.BotaoCarrinho onClick={() => navigate('/entrega')}>Continuar com a entrega</styled.BotaoCarrinho>
        </styled.ContainerSidebar>
    </div>
    </>
    )}
   
export default Sidebar