import { useNavigate, useParams } from "react-router-dom"
import * as entrega from './styles'
import { useDispatch } from "react-redux"
import { open } from '../../../store/reducers/cart'

const SidebarEntrega = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams<{ id: string }>()

    const cartReturn = () => {
        navigate(`/restaurante/${id}`)
        dispatch(open())
    }

        return(
        <>
            <div className="viewport-shadow">
            <entrega.ContainerDelivey>
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
                    <entrega.ButtonEntrega onClick={() => navigate(`/restaurante/${id}/payment`)}>Continuar com o pagamento</entrega.ButtonEntrega>
                </entrega.ItemFormulario>
                <entrega.ItemFormulario>
                    <entrega.ButtonEntrega onClick={cartReturn}>Voltar para o carrinho</entrega.ButtonEntrega>
                </entrega.ItemFormulario>
                </entrega.BotoesEntrega>
            </entrega.ContainerDelivey>
            </div>
        </>
        )
}


export default SidebarEntrega