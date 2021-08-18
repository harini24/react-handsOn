import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/cjs/react-dom-test-utils.development"
const initialState = {
    cartProducts: [],
    total: 0
}

const cartStore = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setCartProducts: (state, action) => {
            state.cartProducts = [...state.cartProducts, action.payload]
        }
    }
})

export const cartAction = cartStore.actions
export default cartStore.reducer