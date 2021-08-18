import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    selectedProduct: {}
}

const productsStore = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setSelectedProducts: (state, action) => {
            state.selectedProduct = action.payload
        }
    }
})

export const productAction = productsStore.actions
export default productsStore.reducer
