import { useEffect, useState } from 'react'
import SidebarPayment from "../Components/Sidebars/SidebarPayment"
import { useDispatch, useSelector } from "react-redux"
import { type FormikProps } from "formik"
import { type PurchasePayload } from "../store/services/api"
import SidebarEntrega from "../Components/Sidebars/SidebarEntrega"
import type { RootReducer } from "../store"
import SidebarSucess from "../Components/Sidebars/SidebarSucess"
import { clear } from '../store/reducers/Carrinho/cart'
import { Loader } from '../Components/Loader'
import { useNavigate } from "react-router-dom"
import { useCheckout } from '../Components/validations/checkout'

export type PropsCheckout = {
  form: FormikProps<PurchasePayload>
  setStep: (step: 'delivery' | 'payment') => void
}

export const Checkout = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartItems = useSelector((state: RootReducer) => state.cart.items)
    const [actualStep, setActualStep] = useState<'delivery' | 'payment'>('delivery')
    const { isSuccess, isLoading, form } = useCheckout(actualStep)

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
        {isLoading && <Loader />}
        {isSuccess ? (
          <SidebarSucess />
        ): (
        <>
        {actualStep === 'delivery' && (
        <SidebarEntrega form={form} setStep={setActualStep} />
        )}
        {actualStep === 'payment' && (
        <SidebarPayment form={form} setStep={setActualStep} />
        )}
        </>
        )}
      </>
    )
}

