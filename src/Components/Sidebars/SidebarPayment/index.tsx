import { useNavigate, useParams } from "react-router-dom";
import { ContainerDelivey, DisplayFlex, InputEntrega, ItemFormulario, LabelEntrega, TituloEntrega } from "../SidebarEntrega/styles";
import { ButtonPayment, Input1, Input2, Input3 } from "./styles";

const SidebarPayment = () => {

    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    return (
    <>
    <div className="viewport-shadow">
        <ContainerDelivey>
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
            <ButtonPayment>Finalizar pagamento</ButtonPayment>
        </ItemFormulario>
        <ItemFormulario>
            <ButtonPayment onClick={() => navigate(`/restaurante/${id}/delivery`)}>Voltar para a edição de endereço</ButtonPayment>
        </ItemFormulario>
        </ContainerDelivey>
        </div>
        </>
)
}

export default SidebarPayment