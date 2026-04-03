import { ContainerDelivey, DisplayFlex, InputEntrega, ItemFormulario, TituloEntrega } from "../SidebarEntrega/styles";
import { ButtonPayment, ErrorMessage, Input1, Input2, Input3, LabelPayment } from "./styles";
import { checkInputHasError, formataPreco, getTotalPrice } from "../../../utils";
import { useSelector } from "react-redux";
import type { RootReducer } from "../../../store";
import type { PropsCheckout } from "../../../models/checkout";

export type PaymentFormValues = {
  name: string
  address: string
  city: string
  cep: string
  number: string
  complement?: string
}

const SidebarPayment = ({ form, setStep }: PropsCheckout) => {

    const { items } = useSelector((state: RootReducer) => state.cart)
    const formSubmit = () => {
        form.validateForm().then((errors) => {
                if(Object.keys(errors).length === 0) {
                    form.handleSubmit()
                } else {
                    form.setTouched({
                        payment: {
                            card: {
                                name: true,
                                code: true,
                                number: true,
                                expires: {
                                    month: true,
                                    year: true
                                }
                            }
                        }
                    })
                }}
                )
    }

    return (
    <>
    <div className="viewport-shadow">
        <ContainerDelivey>
        <TituloEntrega>Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}</TituloEntrega>
        <LabelPayment htmlFor="">Nome no cartão</LabelPayment>
            <ItemFormulario>
                <InputEntrega onBlur={form.handleBlur} name="payment.card.name" onChange={form.handleChange} value={form.values.payment.card.name} id="cardName" type="text" />
                {checkInputHasError('payment.card.name', form) && (
                    <small>Nome inválido</small>
                )}
            </ItemFormulario>
        <DisplayFlex>
            <div>
                <LabelPayment htmlFor="">Número do cartão</LabelPayment>
                <Input1 onBlur={form.handleBlur} name="payment.card.number" onChange={form.handleChange} value={form.values.payment.card.number} id="cardNumber" type="text" />
                {checkInputHasError('payment.card.number', form) && (
                    <ErrorMessage className="marginLeft">Número inválido</ErrorMessage>
                )}
            </div>
            <div>
                <LabelPayment htmlFor="">CVV</LabelPayment>
                <Input2 onBlur={form.handleBlur} name="payment.card.code" onChange={form.handleChange} value={form.values.payment.card.code} id="cardCode" type="text" />
                {checkInputHasError('payment.card.code', form) && (
                    <ErrorMessage className="marginLeft">Código inválido</ErrorMessage>
                )}
            </div>
        </DisplayFlex>
        <DisplayFlex>
            <div>
                <LabelPayment htmlFor="">Mês de vencimento</LabelPayment>
                <Input3 onBlur={form.handleBlur} name="payment.card.expires.month" onChange={form.handleChange} value={form.values.payment.card.expires.month} type="number" />
                {checkInputHasError('payment.card.expires.month', form) && (
                    <ErrorMessage className="marginLeft">Mês inválido</ErrorMessage>
                )}
            </div>
            <div>
                <LabelPayment htmlFor="">Ano de vencimento</LabelPayment>
                <Input3 onBlur={form.handleBlur} name="payment.card.expires.year" onChange={form.handleChange} value={form.values.payment.card.expires.year} type="number" />
                {checkInputHasError('payment.card.expires.year', form) && (
                    <ErrorMessage className="marginLeft">Ano inválido</ErrorMessage>
                )}
            </div>
        </DisplayFlex>
        <ItemFormulario>
            <ButtonPayment className="marginTop" type="submit" onClick={formSubmit}>Finalizar pagamento</ButtonPayment>
        </ItemFormulario>
        <ItemFormulario>
            <ButtonPayment onClick={() => setStep('delivery')} type="button">Voltar para a edição de endereço</ButtonPayment>
        </ItemFormulario>
        </ContainerDelivey>
        </div>
        </>
)
}

export default SidebarPayment