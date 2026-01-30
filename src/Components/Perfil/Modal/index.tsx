import type { PropsItem } from '../itemCardapio'
import { ButtonCardapio } from '../itemCardapio/styles'
import { ButtonFechar, DescricaoModal, ImagemModal, ModalContainer, TituloModal } from './styles'

type ModalProps = {
  onClose: () => void
  onAdd: (item: PropsItem) => void
  item: PropsItem
}


const Modal = ({ item, onClose, onAdd }: ModalProps) => {
  const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
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
                   <ButtonCardapio onClick={() => onAdd(item)}>Adicionar ao carrinho - {formataPreco(item.preco)}</ButtonCardapio>
                    </div> 
                    </ModalContainer> 
                    </div>
                     </>
                      ) }
 export default Modal