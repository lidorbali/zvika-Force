import{configureStore ,combineReducers  } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productDetailsSReducer,productListsSReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
    productList  : productListsSReducer,
    productDetails: productDetailsSReducer,
    cart : cartReducer , 
    userLogin: userLoginReducer,  
})
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;


const cartItemsFromStorage= localStorage.getItem('cartItems')?
    JSON.parse(localStorage.getItem('cartItems'))
    : []

const ShippingAddressFromStorage= localStorage.getItem('shippingAddress')?
    JSON.parse(localStorage.getItem('shippingAddress'))
    : {}

export const initialState= {
    cart:{cartItems:cartItemsFromStorage, 
    shippingAddress:ShippingAddressFromStorage },  
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware=[thunk]
const store=configureStore({
    reducer:reducer,
    preloadedState: initialState,
    middleware: middleware,});




export default store