import { useNavigate } from "react-router-dom";
import {  ContainerSidebar } from "../SidebarCompra/styles";
import { DisplayFlex, InputEntrega, ItemFormulario, LabelEntrega, TituloEntrega } from "../SidebarEntrega/styles";
import { ButtonPayment, Input1, Input2, Input3 } from "./styles";
import Perfil from "../../Perfil";

const SidebarPayment = () => {

    const navigate = useNavigate()

    return (
    <>
    <Perfil />
    <div className="viewport-shadow">
        <ContainerSidebar>
        <TituloEntrega>Pagamento - Valor a pagar R$ 60,90</TituloEntrega>
        <LabelEntrega htmlFor="">Nome no cartão</LabelEntrega>
            <ItemFormulario>
                <InputEntrega type="text" />
            </ItemFormulario>
        <DisplayFlex>
            <div>
            <LabelEntrega htmlFor="">Nome no cartão</LabelEntrega>
            <Input1 />
            </div>
            <div>
            <LabelEntrega htmlFor="">CVV</LabelEntrega>
            <Input2 />
            </div>
        </DisplayFlex>
        <DisplayFlex>
            <div>
            <LabelEntrega htmlFor="">Mês de vencimento</LabelEntrega>
            <Input3 />
            </div>
            <div>
            <LabelEntrega htmlFor="">Ano de vencimento</LabelEntrega>
            <Input3 />
            </div>
        </DisplayFlex>
       
        <ItemFormulario>
            <ButtonPayment onClick={() => navigate('/success')}>Finalizar pagamento</ButtonPayment>
        </ItemFormulario>
        <ItemFormulario>
            <ButtonPayment onClick={() => navigate('/entrega')}>Voltar para a edição de endereço</ButtonPayment>
        </ItemFormulario>
        </ContainerSidebar>
        </div>
        </>
)
}

export default SidebarPayment