import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === CartActionTypes.TOGGLE_CART_HIDDEN) {
    return {
      ...state,
      hidden: !state.hidden,
    };
  } else if (action.type === CartActionTypes.ADD_ITEM) {
    return {
      ...state,
      items: addItemToCart(state.items, action.payload),
    };
  } else if (action.type === CartActionTypes.REMOVE_CART_ITEM) {
    return {
      ...state,
      items: removeItemFromCart(state.items, action.payload),
    };
  } else return state;
};

export default cartReducer;
