import Perfil from '../../Perfil'
import type { PropsItem } from '../../Perfil/itemCardapio'
import * as styled from './styles'
import { useNavigate } from 'react-router-dom'

type PropsCompra = {
    produto: PropsItem
    onClose: () => void
}

const Sidebar = ({ produto, onClose }: PropsCompra) => {

    const navigate = useNavigate()

    const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

    return(
        <>
        <Perfil />
        <div className="viewport-shadow">
        <styled.ContainerSidebar>
            <styled.Produto>
            <styled.PizzaSidebar src={produto.foto} alt="" />
           <styled.DescricaoProduto>
             <h3>{produto.nome}</h3>
            <p>{formataPreco(produto.preco)}</p>
           </styled.DescricaoProduto>
            <styled.BotaoRemover onClick={onClose}><i className="bi bi-trash3"></i></styled.BotaoRemover>
        </styled.Produto>
        <styled.ValorTotal>
            <p>Valor Total</p>
            <p>{formataPreco(produto.preco)}</p>
        </styled.ValorTotal>
        <styled.BotaoCarrinho onClick={() => navigate('/entrega')}>Continuar com a entrega</styled.BotaoCarrinho>
        </styled.ContainerSidebar>
    </div>
    </>
    )}
   
export default Sidebar