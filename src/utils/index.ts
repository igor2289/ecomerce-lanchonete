import { getIn, type FormikProps } from "formik"
import type { PropsItem } from "../Components/Perfil/itemCardapio"
import type { PurchasePayload } from "../store/services/api"

    export const encurtaTexto = (texto: string[], limite: number) => {
        if (texto.length <=  limite) return texto
        return texto.slice(0, limite).concat('...')

    }

    export const numberFormat = (preco = 0) => {
        return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
    }

    export const getTotalPrice = (items: PropsItem[]) => {
                return items.reduce((acumulador, valorAtual) => {
                return (acumulador += valorAtual.preco)
                }, 0)
            }

     export const checkInputHasError = (fieldname: string, form: FormikProps<PurchasePayload>) => {
           
        const isTouched = getIn(form.touched, fieldname)
        const isInvalid = getIn(form.errors, fieldname)

        return Boolean(isInvalid && isTouched)
    
        }
    