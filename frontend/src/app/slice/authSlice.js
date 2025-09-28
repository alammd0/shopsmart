import { createSlice } from '@reduxjs/toolkit'


const user = {
    name : "",
    email : "",
    role : "",
    password : "",
}

const initialState = {
    user,
    token : ""
}

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setRegister : (state, action) => {
            state.user = action.payload.user

        },

        setLogin : (state, action) => {
            state.user = action.payload.user
        },

        setToken : (state, action) => {
            state.token = action.payload
        },

        logout : (state) => {
            state.user = user
            state.token = ""
        }
    }
})


export const { setRegister, setLogin, setToken, logout } = authSlice.actions
export default authSlice.reducer

