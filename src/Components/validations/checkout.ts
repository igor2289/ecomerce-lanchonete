import { useSelector } from "react-redux"
import * as Yup from 'yup'
import { useFormik } from "formik"

import type { RootReducer } from "../../store"
import { usePurchaseMutation, type PurchasePayload } from "../../store/services/api"

export const deliverySchema = Yup.object({
    delivery: Yup.object({
      receiver: Yup.string().required(),
      address: Yup.object({
      description: Yup.string().required(),
      city: Yup.string().required(),
      zipCode: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string()
    })
})
    })
    export const paymentSchema = Yup.object({
      payment: Yup.object({
      card: Yup.object({
      name: Yup.string().required(),
      number: Yup.string().min(16).required(),
      code: Yup.string().min(3).max(3).required(),
      expires: Yup.object({
        month: Yup.string().max(2).required(),
        year: Yup.string().min(2).required()
        })
    })
})
})


export const useCheckout = (step: 'delivery' | 'payment') => {
  
const cartItems = useSelector((state: RootReducer) => state.cart.items)
const products = cartItems.map((item) => ({
    id: item.id,
    price: item.preco
}))
const [purchase, { isSuccess, isLoading }] = usePurchaseMutation()

  const form = useFormik<PurchasePayload>({
    
  enableReinitialize: true,
  initialValues: {
    products,
     delivery: {
    receiver: '',
    address: {
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    }
  },
  payment: {
    card: {
      name: '',
      number: '',
      code: '',
      expires: {
        month: '',
        year: ''
      }
    }
  }
},
  validationSchema: step === 'delivery' ? deliverySchema : paymentSchema,
  onSubmit(values) {
    purchase(values)
}})

return {
  form,
  isSuccess,
  isLoading
}
}

