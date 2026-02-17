import { createSlice,  } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { PropsItem } from '../../Components/Perfil/itemCardapio'

type CartState = {
    items: PropsItem[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<PropsItem>) => {
            const produto = state.items.find(item => item.id === action.payload.id)

            if(!produto) {
                state.items.push(action.payload)
            } else {
                alert('Este prato já está no carrinho.')
            }
            
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer