import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import type { RootReducer } from '../../../store'
import { close, remove } from '../../../store/reducers/Carrinho/cart'
import { numberFormat, getTotalPrice } from '../../../utils'

import * as s from './styles'

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
            <s.SidebarContainer onClick={(e) => e.stopPropagation()} className={isOpen ? 'is-open' : ''}>
                <ul>
                    {items.map((item) => (
                    <li key={item.id}>
                        <s.Product>
                        <s.PizzaSidebar src={item.foto} alt="" />
                        <s.ProductDescription>
                        <h3>{item.nome}</h3>
                        <p>{numberFormat(item.preco)}</p>
                        </s.ProductDescription>
                        <s.RemoveButton onClick={() => removeItem(item.id)}><i className="bi bi-trash3"></i></s.RemoveButton>
                        </s.Product>
                    </li>
                    ))}
                </ul>
            {items.length > 0 ? (
            <>
            <s.TotalValue>
                <p>Valor Total</p>
                <p>{numberFormat(getTotalPrice(items))}</p>
            </s.TotalValue>
            <s.CartButton type='submit' onClick={goToDelivery}>Continuar com a entrega</s.CartButton>
            </>
          ): (
            <s.TotalValue>
                <p className='text-center'>Você não adicionou produtos ao carrinho.</p>
            </s.TotalValue>
          )}
        </s.SidebarContainer>
    </div>
        </>
    )
}
   
export default Sidebar