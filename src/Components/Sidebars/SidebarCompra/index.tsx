import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../../store'

import * as styled from './styles'
import { close, remove } from '../../../store/reducers/Carrinho/cart'
import { formataPreco, getTotalPrice } from '../../../utils'
import { useNavigate, useParams } from 'react-router-dom'



const Sidebar = () => {
    const dispatch = useDispatch()
    const {isOpen, items} = useSelector((state: RootReducer) => state.cart)
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()


    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const goToDelivery = () => {
        if(items.length > 0) {
            closeCart()
            navigate(`/restaurante/${id}/checkout`)
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
          {items.length > 0 ? (
            <>
            <styled.ValorTotal>
            <p>Valor Total</p>
            <p>{formataPreco(getTotalPrice(items))}</p>
            </styled.ValorTotal>
            <styled.BotaoCarrinho type='submit' onClick={goToDelivery}>Continuar com a entrega</styled.BotaoCarrinho>
            </>
          ): (
            <styled.ValorTotal>
            <p className='text-center'>Você não adicionou produtos ao carrinho.</p>
            </styled.ValorTotal>
          )}
     </styled.ContainerSidebar>
    </div>
    </>
    )}
   
export default Sidebar