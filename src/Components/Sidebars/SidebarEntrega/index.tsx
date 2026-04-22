import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"

import { open } from '../../../store/reducers/Carrinho/cart'
import type { PropsCheckout } from "../../../models/checkout"
import { checkInputHasError } from "../../../utils"

import * as s from './styles'

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

    const formatCEP = (value: string) => {
        return value
            .replace(/\D/g, '')       
            .slice(0, 8)             
            .replace(/(\d{5})(\d)/, '$1-$2')
}

    return(
        <>
        <div className="viewport-shadow">
            <s.DeliveryContainer>
                <s.DeliveryTitle>Entrega</s.DeliveryTitle>
                <s.DeliveryLabel htmlFor="">Quem irá receber</s.DeliveryLabel>
                <s.FormItem>
                    <s.DeliveryInput onBlur={form.handleBlur} name="delivery.receiver" onChange={(e) => form.setFieldValue('delivery.receiver', e.target.value.slice(0, 35))} value={form.values.delivery.receiver} id="receiver" type="text" />
                    {checkInputHasError('delivery.receiver', form) && (
                    <small>Nome inválido</small>
                    )}
                </s.FormItem>
                    <s.DeliveryLabel htmlFor="">Endereço</s.DeliveryLabel>
                <s.FormItem>
                    <s.DeliveryInput onBlur={form.handleBlur} name="delivery.address.description" onChange={(e) => form.setFieldValue('delivery.address.description', e.target.value.slice(0, 45))} value={form.values.delivery.address.description} id="address" type="text" />
                    {checkInputHasError('delivery.address.description', form) && (
                    <small>Endereço inválido</small>
                    )}
                </s.FormItem>
                <s.DeliveryLabel htmlFor="">Cidade</s.DeliveryLabel>
                <s.FormItem>
                    <s.DeliveryInput onBlur={form.handleBlur} name="delivery.address.city" onChange={(e) => form.setFieldValue('delivery.address.city', e.target.value.slice(0, 25))} value={form.values.delivery.address.city}  id="city" type="text" />
                    {checkInputHasError('delivery.address.city', form) && (
                    <small>Cidade inválida</small>
                    )}
                </s.FormItem>
                <s.DisplayFlex>
                    <s.FormItem>
                        <s.DeliveryLabel htmlFor="">CEP</s.DeliveryLabel>
                        <s.DeliveryInput onBlur={form.handleBlur} name="delivery.address.zipCode" onChange={(e) => form.setFieldValue('delivery.address.zipCode', e.target.value.replace(/\D/g, ''))} value={formatCEP(form.values.delivery.address.zipCode)} id="cep" type="text" />
                        {checkInputHasError('delivery.address.zipCode', form) && (
                        <small>CEP inválido</small>
                        )}
                    </s.FormItem>
                    <s.FormItem>
                        <s.DeliveryLabel htmlFor="">Número</s.DeliveryLabel>
                        <s.DeliveryInput onBlur={form.handleBlur} name="delivery.address.number" onChange={(e) => form.setFieldValue('delivery.address.number', e.target.value.slice(0, 15))} value={form.values.delivery.address.number} id="number" type="text" />
                        {checkInputHasError('delivery.address.number', form) && (
                        <small>Número inválido</small>
                        )}
                    </s.FormItem>
                </s.DisplayFlex>
                <s.DeliveryLabel htmlFor="">Complemento (opcional)</s.DeliveryLabel>
                <s.FormItem>
                    <s.DeliveryInput onBlur={form.handleBlur} name="delivery.address.complement" onChange={form.handleChange} value={form.values.delivery.address.complement} id="complement" type="text" />
                </s.FormItem>
                <s.DeliveryButtons>
                    <s.FormItem>
                        <s.DeliveryButton onClick={handleNext} type="button">Continuar com o pagamento</s.DeliveryButton>
                    </s.FormItem>
                <s.FormItem>
                    <s.DeliveryButton onClick={cartReturn} type="button">Voltar para o carrinho</s.DeliveryButton>
                </s.FormItem>
                </s.DeliveryButtons>
            </s.DeliveryContainer>
        </div>
        </>
    )
}

export default SidebarEntrega