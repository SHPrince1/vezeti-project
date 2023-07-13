import { createStore } from 'redux';
const reducer = (cart = {cart:0}, action) => {
    // console.log('reducer called');
    if (action.type ==="INC") {
        // let tempCart = cart.filter((item)=> item.id===action.payload.id)
        return {cart:cart.cart + 1}; 
    }
    if (action.type ==="DEC") {
        return {cart:cart.cart - 1};
    }
    // if (action.type === 'ADD'){
    //     return {counter:cart.counter + action.payload}
    // }
    
  
    return cart;
  };
  
const store = createStore(reducer);

export default store;