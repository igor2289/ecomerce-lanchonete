import Perfil from '..'
import Pizza from '../../../assets/2d191807374d0118af6a26d9cdb2300a285d481a.png'
import { ButtonCardapio } from '../itemCardapio/styles'
import { ButtonFechar, DescricaoModal, ImagemModal, ModalContainer, TituloModal } from './styles'
import { useNavigate } from 'react-router-dom'

const Modal = () => {

    const navigate = useNavigate()

     return (
         <>
         <Perfil />
          <div className="viewport-shadow">
            <ModalContainer className="container"> 
            <div>
             <ImagemModal src={Pizza} alt="" />
              </div> 
              <div> 
                <ButtonFechar onClick={() => navigate('/perfil')}>X</ButtonFechar>
                <TituloModal>Pizza Marguerita</TituloModal>
                 <DescricaoModal>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</DescricaoModal>
                  <DescricaoModal>Serve: de 2 a 3 pessoas</DescricaoModal>
                   <ButtonCardapio onClick={() => navigate('/carrinho')}>Adicionar ao carrinho - R$60,90</ButtonCardapio>
                    </div> 
                    </ModalContainer> 
                    </div>
                     </>
                      ) }
 export default Modal