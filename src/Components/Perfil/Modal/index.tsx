import { useDispatch } from 'react-redux'

import type { PropsItem } from '../itemCardapio'
import { FoodButton } from '../itemCardapio/styles'
import { numberFormat } from '../../../utils'
import { add, open } from '../../../store/reducers/Carrinho/cart'

import * as s from './styles'

type ModalProps = {
  onClose: () => void
  item: PropsItem
}

const Modal = ({ item, onClose }: ModalProps) => {
  const dispatch = useDispatch()


  const addToCart = () => {
    onClose()
    dispatch(add(item))
    dispatch(open())
  }

  return (
    <>
    <div className="viewport-shadow">
      <s.ModalContainer className="container"> 
        <div>
          <s.ModalImage src={item.foto} alt="" />
        </div> 
        <div> 
          <s.CloseButton onClick={onClose}>X</s.CloseButton>
          <s.ModalTitle>{item.nome}</s.ModalTitle>
          <s.ModalDescription>{item.descricao}</s.ModalDescription>
          <s.ModalDescription>{item.porcao}</s.ModalDescription>
          <FoodButton className='reduceWidth' onClick={addToCart}>Adicionar ao carrinho - {numberFormat(item.preco)}</FoodButton>
        </div> 
          </s.ModalContainer> 
        </div>
    </>
  )
}
 export default Modal