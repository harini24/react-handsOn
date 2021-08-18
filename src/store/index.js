import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './Cart'
import productsReducer from './products'
const store = configureStore({
    reducer: {
        'products': productsReducer,
        'cart': CartReducer
    }
})

export default store