import { useNavigate } from "react-router-dom"
import { ContainerSidebar } from "../SidebarCompra/styles"
import { ButtonEntrega } from "../SidebarEntrega/styles"
import { DescricaoSucess, TituloSucess } from "./styles"
import Perfil from "../../Perfil"

const SidebarSucess = () => {

    const navigate = useNavigate()

    return(
    <>
    <Perfil />
    <div className="viewport-shadow">
        <ContainerSidebar>
        <TituloSucess>Pedido realizado - nº 1</TituloSucess>
        <DescricaoSucess>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</DescricaoSucess>
        <DescricaoSucess>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</DescricaoSucess>
        <DescricaoSucess>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</DescricaoSucess>
        <DescricaoSucess>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</DescricaoSucess>
        <ButtonEntrega onClick={() => navigate('/perfil')}>Concluir</ButtonEntrega>
        </ContainerSidebar>
    </div>
    </>
)
}
export default SidebarSucess