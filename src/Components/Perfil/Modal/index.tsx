import { useDispatch } from 'react-redux'
import type { PropsItem } from '../itemCardapio'
import { ButtonFechar, DescricaoModal, ImagemModal, ModalContainer, TituloModal } from './styles'
import { add, open } from '../../../store/reducers/cart'

import { ButtonCardapio } from '../itemCardapio/styles'
import { formataPreco } from '../../../utils'

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
            <ModalContainer className="container"> 
            <div>
             <ImagemModal src={item.foto} alt="" />
            </div> 
            <div> 
              <ButtonFechar onClick={onClose}>X</ButtonFechar>
              <TituloModal>{item.nome}</TituloModal>
              <DescricaoModal>{item.descricao}</DescricaoModal>
              <DescricaoModal>{item.porcao}</DescricaoModal>
              <ButtonCardapio className='reduceWidth' onClick={addToCart}>Adicionar ao carrinho - {formataPreco(item.preco)}</ButtonCardapio>
            </div> 
              </ModalContainer> 
          </div>
                     </>
                      ) }
 export default Modal