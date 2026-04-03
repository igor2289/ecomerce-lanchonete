import { useNavigate } from "react-router-dom"
import { ButtonEntrega, ContainerDelivey } from "../SidebarEntrega/styles"
import { DescricaoSucess, TituloSucess } from "./styles"
import Perfil from "../../Perfil"

const SidebarSucess = () => {

    const navigate = useNavigate()

    return(
    <>
    <Perfil />
    <div className="viewport-shadow">
        <ContainerDelivey>
        <TituloSucess>Pedido realizado - nº 1</TituloSucess>
        <DescricaoSucess>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</DescricaoSucess>
        <DescricaoSucess>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</DescricaoSucess>
        <DescricaoSucess>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</DescricaoSucess>
        <DescricaoSucess>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</DescricaoSucess>
        <ButtonEntrega onClick={() => navigate('/')}>Concluir</ButtonEntrega>
        </ContainerDelivey>
    </div>
    </>
)
}
export default SidebarSucess