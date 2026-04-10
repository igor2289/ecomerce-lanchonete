import { useEffect, useState } from 'react'
import SidebarPayment from "../Components/Sidebars/SidebarPayment"
import { useDispatch, useSelector } from "react-redux"
import { type FormikProps } from "formik"
import { usePurchaseMutation, type PurchasePayload } from "../store/services/api"
import SidebarEntrega from "../Components/Sidebars/SidebarEntrega"
import type { RootReducer } from "../store"
import SidebarSucess from "../Components/Sidebars/SidebarSucess"
import { clear } from '../store/reducers/Carrinho/cart'
import { useNavigate } from "react-router-dom"
import { useCheckout } from '../Components/validations/checkout'

export type PropsCheckout = {
  form: FormikProps<PurchasePayload>
  setStep: (step: 'delivery' | 'payment') => void
  isLoading?: boolean
  purchase: ReturnType<typeof usePurchaseMutation>[0] 
}

export const Checkout = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartItems = useSelector((state: RootReducer) => state.cart.items)
    const [actualStep, setActualStep] = useState<'delivery' | 'payment'>('delivery')
    const { form } = useCheckout(actualStep)
    const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

    useEffect(() => {
      if(isSuccess) {
         dispatch(clear())
      }
    }, [isSuccess, dispatch])

    useEffect(() => {
      if(cartItems.length === 0 && !isSuccess) {
      navigate('/')
    }
    }, [])


    return (
      <>
        {isSuccess ? (
          <SidebarSucess data={data} />
        ): (
        <>
        {actualStep === 'delivery' && (
        <SidebarEntrega purchase={purchase} form={form} setStep={setActualStep} />
        )}
        {actualStep === 'payment' && (
        <SidebarPayment purchase={purchase} isLoading={isLoading} form={form} setStep={setActualStep} />
        )}
        </>
        )}
      </>
    )
}

