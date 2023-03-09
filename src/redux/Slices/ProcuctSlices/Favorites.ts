import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { Product } from "../../../Types/ProductTypes";

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoriteProduct: []
    },
    reducers:{
        addProduct: (state:RootState, action:PayloadAction)   => {
            state.favoriteProduct.push(action.payload)
        },
        deleteProduct: (state:RootState, action:PayloadAction) => {
            state.favoriteProduct = state.favoriteProduct.filter((product:Product) => product.id !== action.payload)
        },
        deleteAllProducts: (state:RootState) => {
            state.favoriteProduct =  []
        }
    }
})

export const {addProduct, deleteProduct, deleteAllProducts} = favoriteSlice.actions
export default favoriteSlice.reducer