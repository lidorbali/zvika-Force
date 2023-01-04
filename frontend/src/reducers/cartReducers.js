import {CART_ADD_ITEM} from '../constants/cartConstans'


export const cartReducer = (state = {cartItems:[]},action) => {
 switch (action.type){
    case CART_ADD_ITEM:
        const item =action.payload
        const existItem = state.cartItems.find(x => x.product === item.product)
           

        // if product is in cart replace with new item
        // product= the id of the product
        if(existItem){
          return{
            ...state,
            cartItems: state.cartItems.map(x=>
              x.product === existItem.product ? item : x)
          }
          // add item to cart
        }else{
          return{
            ...state,
            cartItems:[...state.cartItems, item]
          }
        }



    default:
        return state;

 }

}