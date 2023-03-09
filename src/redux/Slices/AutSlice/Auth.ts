import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { Auth } from '../../../Types/AuthTypes';


const initialState = {
    email:null,
    password:null,
    loading: false,
    error: null,
    acces: ''
}

export const authUser = createAsyncThunk(
    'auth/authUser',
     async ({email, password}:Auth) => {
        try {         
            const {data} = await axios.post("https://api.escuelajs.co/api/v1/auth/login"
            , {
                email,
                password,
            })
            if(data.access_token){
                window.localStorage.setItem('token', data.access_token)
                return data
            }  
                       
        } catch (error) {
            console.log(error);

        }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(authUser.pending, (state) => {
            state.loading = true
        }) 
        .addCase(authUser.fulfilled, (state, action) => {
            state.loading = false
            state.email = action.payload.email
            state.password = action.payload.password
            state.acces = action.payload.acces
        })
        .addCase(authUser.rejected, (state, action) => {
            state.loading = false
            state.error = null
        })
    }
    
 
    
})

export default authSlice.reducer