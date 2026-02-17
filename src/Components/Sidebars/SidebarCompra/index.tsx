import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { RootReducer } from '../../../store'

import * as styled from './styles'
import { close, remove } from '../../../store/reducers/cart'
import { formataPreco } from '../../../utils/text'

const Sidebar = () => {
    const dispatch = useDispatch()
    const {isOpen, items} = useSelector((state: RootReducer) => state.cart)

    const closeCart = () => {
        dispatch(close())
    }

     const getTotalPrice = () => {
            return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco)
            }, 0)
        }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const navigate = useNavigate()

    const abreEntrega = () => {
        if(items.length > 0) {
            closeCart()
            navigate("/entrega")
        } else {
            alert('É preciso adicionar um item para continuar a compra.')
        }
    }

    return(
        <>
    <div onClick={closeCart} className="viewport-shadow">
        <styled.ContainerSidebar onClick={(e) => e.stopPropagation()} className={isOpen ? 'is-open' : ''}>
            <ul>
                {items.map((item) => (
                <li key={item.id}>
            <styled.Produto>
            <styled.PizzaSidebar src={item.foto} alt="" />
            <styled.DescricaoProduto>
            <h3>{item.nome}</h3>
            <p>{formataPreco(item.preco)}</p>
            </styled.DescricaoProduto>
            <styled.BotaoRemover onClick={() => removeItem(item.id)}><i className="bi bi-trash3"></i></styled.BotaoRemover>
            </styled.Produto>
                </li>
                ))}
            </ul>
        <styled.ValorTotal>
            <p>Valor Total</p>
            <p>{formataPreco(getTotalPrice())}</p>
        </styled.ValorTotal>
        <styled.BotaoCarrinho onClick={abreEntrega}>Continuar com a entrega</styled.BotaoCarrinho>
        </styled.ContainerSidebar>
    </div>
    </>
    )}
   
export default Sidebar