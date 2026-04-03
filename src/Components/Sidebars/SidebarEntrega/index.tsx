import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"

import { open } from '../../../store/reducers/Carrinho/cart'
import type { PropsCheckout } from "../../../models/checkout"
import { checkInputHasError } from "../../../utils"

import * as delivery from './styles'

const SidebarEntrega = ({ setStep, form }: PropsCheckout) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams<{ id: string }>()


    const cartReturn = () => {
        navigate(`/restaurante/${id}`)
        dispatch(open())
    }

    const handleNext = async () => {
        const errors = await form.validateForm()

        const deliveryErrors = errors.delivery

        const hasErrors = deliveryErrors && Object.keys(deliveryErrors).length > 0

        if(!hasErrors) {
            setStep('payment')
        } else {
            form.setTouched({
                delivery: {
                    receiver: true,
                    address: {
                        city: true,
                        description: true,
                        number: true,
                        zipCode: true
                    }
                }
            })
        }
    }

    return(
        <>
        <div className="viewport-shadow">
        <delivery.ContainerDelivey>
            <delivery.TituloEntrega>Entrega</delivery.TituloEntrega>
            <delivery.LabelEntrega htmlFor="">Quem irá receber</delivery.LabelEntrega>
            <delivery.ItemFormulario>
                <delivery.InputEntrega onBlur={form.handleBlur} name="delivery.receiver" onChange={form.handleChange} value={form.values.delivery.receiver} id="receiver" type="text" />
                {checkInputHasError('delivery.receiver', form) && (
                    <small>* Nome inválido</small>
                )}
            </delivery.ItemFormulario>
            <delivery.LabelEntrega htmlFor="">Endereço</delivery.LabelEntrega>
            <delivery.ItemFormulario>
                <delivery.InputEntrega onBlur={form.handleBlur} name="delivery.address.description" onChange={form.handleChange} value={form.values.delivery.address.description} id="address" type="text" />
                {checkInputHasError('delivery.address.description', form) && (
                    <small>* Endereço inválido</small>
                )}
            </delivery.ItemFormulario>
            <delivery.LabelEntrega htmlFor="">Cidade</delivery.LabelEntrega>
            <delivery.ItemFormulario>
                <delivery.InputEntrega onBlur={form.handleBlur} name="delivery.address.city" onChange={form.handleChange} value={form.values.delivery.address.city}  id="city" type="text" />
                {checkInputHasError('delivery.address.city', form) && (
                    <small>* Cidade inválida</small>
                )}
            </delivery.ItemFormulario>
            <delivery.DisplayFlex>
            <delivery.ItemFormulario>
                <delivery.LabelEntrega htmlFor="">CEP</delivery.LabelEntrega>
                <delivery.InputEntrega onBlur={form.handleBlur} name="delivery.address.zipCode" onChange={form.handleChange} value={form.values.delivery.address.zipCode} id="cep" type="text" />
                {checkInputHasError('delivery.address.zipCode', form) && (
                    <small>* CEP inválido</small>
                )}
                </delivery.ItemFormulario>
                <delivery.ItemFormulario>
                <delivery.LabelEntrega htmlFor="">Número</delivery.LabelEntrega>
                <delivery.InputEntrega onBlur={form.handleBlur} name="delivery.address.number" onChange={form.handleChange} value={form.values.delivery.address.number} id="number" type="text" />
                {checkInputHasError('delivery.address.number', form) && (
                    <small>* Número inválido</small>
                )}
                </delivery.ItemFormulario>
                </delivery.DisplayFlex>
                <delivery.LabelEntrega htmlFor="">Complemento (opcional)</delivery.LabelEntrega>
                <delivery.ItemFormulario>
                <delivery.InputEntrega onBlur={form.handleBlur} name="delivery.address.complement" onChange={form.handleChange} value={form.values.delivery.address.complement} id="complement" type="text" />
                </delivery.ItemFormulario>
                <delivery.BotoesEntrega>
                <delivery.ItemFormulario>
                    <delivery.ButtonEntrega onClick={handleNext} type="button">Continuar com o pagamento</delivery.ButtonEntrega>
                </delivery.ItemFormulario>
                <delivery.ItemFormulario>
                    <delivery.ButtonEntrega onClick={cartReturn} type="button">Voltar para o carrinho</delivery.ButtonEntrega>
                </delivery.ItemFormulario>
                </delivery.BotoesEntrega>
            </delivery.ContainerDelivey>
            </div>
        </>
    )
}

export default SidebarEntrega