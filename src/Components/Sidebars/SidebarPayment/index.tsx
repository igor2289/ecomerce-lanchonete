import { DisplayFlex,  ItemFormulario, TituloEntrega } from "../SidebarEntrega/styles";
import { ButtonPayment, ContainerPayment, ErrorMessage,  Input2, Input3, Input4, InputPayment, LabelCode, LabelPayment } from "./styles";
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

const SidebarPayment = ({ form, setStep, isLoading, purchase }: PropsCheckout) => {

    const { items } = useSelector((state: RootReducer) => state.cart)
     const cartItems = useSelector((state: RootReducer) => state.cart.items)
    
         const handlePurchase = async () => {
          try {
            const payload = {
              products: cartItems.map((item) => ({
                id: item.id,
                price: item.preco
              })),
              delivery: form.values.delivery,
              payment: form.values.payment
            }
            await purchase(payload).unwrap()
          } catch(err) {
            console.error(err)
          }
        }
    const formSubmit = async () => {
        form.validateForm().then((errors) => {
                if(Object.keys(errors).length === 0) {
                    handlePurchase()
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

    const formatCardName = (value: string) => {
        return value
            .toUpperCase()
            .replace(/[^A-Z\s]/g, '')
            .slice(0, 30)
}

    const formatCardNumber = (value: string) => {
        return value
            .replace(/\D/g, '')   
            .slice(0, 16)
            .replace(/(\d{4})(?=\d)/g, '$1 ')
}

    return (
    <>
    <div className="viewport-shadow">
        <ContainerPayment>
        <TituloEntrega>Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}</TituloEntrega>
        <LabelPayment htmlFor="">Nome no cartão</LabelPayment>
                <InputPayment onBlur={form.handleBlur} name="payment.card.name" onChange={(e) => form.setFieldValue('payment.card.name', formatCardName(e.target.value))} value={formatCardName(form.values.payment.card.name)} id="cardName" type="text" />
                {checkInputHasError('payment.card.name', form) && (
                    <ErrorMessage className="marginLeft">Nome inválido</ErrorMessage>
                )}
        <DisplayFlex>
            <div>
                <LabelPayment htmlFor="">Número do cartão</LabelPayment>
                <Input2 onBlur={form.handleBlur} name="payment.card.number" onChange={(e) => form.setFieldValue('payment.card.number', e.target.value.replace(/\D/g, '').slice(0, 16))} value={formatCardNumber(form.values.payment.card.number)} id="cardNumber" type="text" />
                {checkInputHasError('payment.card.number', form) && (
                    <ErrorMessage className="marginLeft">Número inválido</ErrorMessage>
                )}
            </div>
            <div>
                <LabelCode htmlFor="">CVV</LabelCode>
                <Input3 onBlur={form.handleBlur} name="payment.card.code" onChange={(e) => form.setFieldValue('payment.card.code',e.target.value.replace(/\D/g, '').slice(0, 3))} value={form.values.payment.card.code} id="cardCode" type="text" />
                {checkInputHasError('payment.card.code', form) && (
                    <ErrorMessage className="marginLeft">Código inválido</ErrorMessage>
                )}
            </div>
        </DisplayFlex>
        <DisplayFlex>
            <div>
                <LabelPayment htmlFor="">Mês de vencimento</LabelPayment>
                <Input4 onBlur={form.handleBlur} name="payment.card.expires.month" value={form.values.payment.card.expires.month} type="number"  onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, '').slice(0, 2)
                   
                        if (value.length === 1 && Number(value) > 1) {
                        value = `0${value}`
                    }

                        if (value.length === 2) {
                        let num = Number(value)
                        if (num === 0) num = 1
                        if (num > 12) num = 12

                        value = num.toString().padStart(2, '0')
                    }

                    form.setFieldValue('payment.card.expires.month', value)
                }} />
                {checkInputHasError('payment.card.expires.month', form) && (
                    <ErrorMessage className="marginLeft">Mês inválido</ErrorMessage>
                )}
            </div>
            <div>
                <LabelPayment htmlFor="">Ano de vencimento</LabelPayment>
                <Input4 onBlur={form.handleBlur} name="payment.card.expires.year" value={form.values.payment.card.expires.year} type="number" onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, '').slice(0, 2)

                    if (value.length === 2) {
                    const num = Number(value)
                    if (num < 26) value = '26'
                    if (num > 36) value = '36'
                    }

                    form.setFieldValue('payment.card.expires.year', value)}}/>
                    {checkInputHasError('payment.card.expires.year', form) && (
                    <ErrorMessage className="marginLeft">Ano inválido</ErrorMessage>
                )}
            </div>
        </DisplayFlex>
        <ItemFormulario>
            <ButtonPayment className="marginTop" type="submit" onClick={formSubmit}>{isLoading ? 'Finalizando a compra...' : 'Finalizar compra'}</ButtonPayment>
        </ItemFormulario>
        <ItemFormulario>
            <ButtonPayment onClick={() => setStep('delivery')} type="button">Voltar para a edição de endereço</ButtonPayment>
        </ItemFormulario>
        </ContainerPayment>
        </div>
        </>
)
}

export default SidebarPayment