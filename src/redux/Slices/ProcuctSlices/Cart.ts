import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { Product } from "../../../Types/ProductTypes";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProduct: []
    },
    reducers:{
        addToCart: (state:RootState, action:PayloadAction)   => {
            state.cartProduct.push(action.payload)
        },
        deleteFromCart: (state:RootState, action:PayloadAction) => {
            state.cartProduct = state.cartProduct.filter((product:Product) => product.id !== action.payload)
        },
        deleteAllFromCart: (state:RootState) => {
            state.cartProduct =  []
        }
    }
})

export const {addToCart, deleteFromCart, deleteAllFromCart} = cartSlice.actions
export default cartSlice.reducer