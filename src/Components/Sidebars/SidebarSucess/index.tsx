import { useNavigate } from "react-router-dom"
import { ButtonEntrega, ContainerDelivery } from "../SidebarEntrega/styles"
import { DescricaoSucess, TituloSucess } from "./styles"
import Perfil from "../../Perfil"
import { type PurchaseResponse } from "../../../store/services/api"

type Props = {
    data: PurchaseResponse | undefined
}

const SidebarSucess = ({ data }: Props) => {

    const navigate = useNavigate()

    return(
    <>
    <Perfil />
    <div className="viewport-shadow">
        <ContainerDelivery>
        <TituloSucess>Pedido realizado - nº {data?.orderId}</TituloSucess>
        <DescricaoSucess>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</DescricaoSucess>
        <DescricaoSucess>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</DescricaoSucess>
        <DescricaoSucess>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</DescricaoSucess>
        <DescricaoSucess>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</DescricaoSucess>
        <ButtonEntrega onClick={() => navigate('/')}>Concluir</ButtonEntrega>
        </ContainerDelivery>
    </div>
    </>
)
}
export default SidebarSucess