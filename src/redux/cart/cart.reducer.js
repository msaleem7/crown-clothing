import CartActionTypes from './cart.types';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };

    case CartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        items: clearItemFromCart(state.items, action.payload),
      };

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }

  // if (action.type === CartActionTypes.TOGGLE_CART_HIDDEN) {
  //   return {
  //     ...state,
  //     hidden: !state.hidden,
  //   };
  // } else if (action.type === CartActionTypes.ADD_ITEM) {
  //   return {
  //     ...state,
  //     items: addItemToCart(state.items, action.payload),
  //   };
  // } else if (action.type === CartActionTypes.REMOVE_ITEM) {
  //   return {
  //     ...state,
  //     items: removeItemFromCart(state.items, action.payload),
  //   };
  // } else if (action.type === CartActionTypes.CLEAR_CART_ITEM) {
  //   return {
  //     ...state,
  //     items: clearItemFromCart(state.items, action.payload),
  //   };
  // } else return state;
};

export default cartReducer;
