import { useNavigate } from "react-router-dom"
import { ContainerSidebar } from "../SidebarCompra/styles"
import * as entrega from './styles'
import Perfil from "../../Perfil"

const SidebarEntrega = () => {

    const navigate = useNavigate()

        return(
        <>
            <Perfil />
            <div className="viewport-shadow">
            <ContainerSidebar>
                <entrega.TituloEntrega>Entrega</entrega.TituloEntrega>
                <entrega.LabelEntrega htmlFor="">Quem irá receber</entrega.LabelEntrega>
                <entrega.ItemFormulario>
                    <entrega.InputEntrega type="text" />
                </entrega.ItemFormulario>
                <entrega.LabelEntrega htmlFor="">Endereço</entrega.LabelEntrega>
                <entrega.ItemFormulario>
                    <entrega.InputEntrega type="text" />
                </entrega.ItemFormulario>
                <entrega.LabelEntrega htmlFor="">Cidade</entrega.LabelEntrega>
                <entrega.ItemFormulario>
                    <entrega.InputEntrega type="text" />
                </entrega.ItemFormulario>
                <entrega.DisplayFlex>
                <entrega.ItemFormulario>
                    <entrega.LabelEntrega htmlFor="">CEP</entrega.LabelEntrega>
                    <entrega.InputEntrega type="text" />
                    </entrega.ItemFormulario>
                    <entrega.ItemFormulario>
                    <entrega.LabelEntrega htmlFor="">Número</entrega.LabelEntrega>
                    <entrega.InputEntrega type="text" />
                    </entrega.ItemFormulario>
                    </entrega.DisplayFlex>
                    <entrega.LabelEntrega htmlFor="">Complemento (opcional)</entrega.LabelEntrega>
                    <entrega.ItemFormulario>
                    <entrega.InputEntrega type="text" />
                </entrega.ItemFormulario>
                <entrega.BotoesEntrega>
                <entrega.ItemFormulario>
                    <entrega.ButtonEntrega onClick={() => navigate('/payment')}>Continuar com o pagamento</entrega.ButtonEntrega>
                </entrega.ItemFormulario>
                <entrega.ItemFormulario>
                    <entrega.ButtonEntrega onClick={() => navigate('/carrinho')}>Voltar para o carrinho</entrega.ButtonEntrega>
                </entrega.ItemFormulario>
                </entrega.BotoesEntrega>
            </ContainerSidebar>
        </div>
        </>
        )
}


export default SidebarEntrega