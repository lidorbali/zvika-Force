import{configureStore ,combineReducers ,applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productDetailsSReducer,productListsSReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    productList  : productListsSReducer,
    productDetails: productDetailsSReducer,
    cart : cartReducer ,   
})


const cartItemsFromStorage= localStorage.getItem('cartItems')?
    JSON.parse(localStorage.getItem('cartItems'))
    : []

export const initialState= {
    cart:{cartItems:cartItemsFromStorage}
}

const middleware=[thunk]
const store=configureStore({
    reducer:reducer,
    preloadedState: initialState,
    middleware: middleware,});




export default store