import { useNavigate } from "react-router-dom"
import Perfil from "../../Perfil"
import { type PurchaseResponse } from "../../../store/services/api"
import { DeliveryButton, DeliveryContainer } from "../SidebarEntrega/styles"

import * as s from "./styles"

type Props = {
    data: PurchaseResponse | undefined
}

const SidebarSucess = ({ data }: Props) => {

    const navigate = useNavigate()

    return(
    <>
    <Perfil />
    <div className="viewport-shadow">
        <DeliveryContainer>
            <s.SuccessTitle>Pedido realizado - nº {data?.orderId}</s.SuccessTitle>
            <s.SuccessDescription>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</s.SuccessDescription>
            <s.SuccessDescription>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</s.SuccessDescription>
            <s.SuccessDescription>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</s.SuccessDescription>
            <s.SuccessDescription>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</s.SuccessDescription>
            <DeliveryButton onClick={() => navigate('/')}>Concluir</DeliveryButton>
        </DeliveryContainer>
    </div>
    </>
    )
}
export default SidebarSucess