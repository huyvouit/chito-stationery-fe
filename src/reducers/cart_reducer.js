import {
  ADD_TO_CART,
  REMOVE_ITEM,
  REMOVE_ITEM_WITH_QUANTITY,
  CLEAR_ITEM_FROM_CART,
} from "../actions/action_type";
import {
  addItemsToCart,
  calculateTotalPrice,
  removeItemWithQuantityFromCart,
  removeItemFromCart,
} from "./cart.utils.js";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      // console.log()
      const items = addItemsToCart(
        state.cartItems,
        action.payload.item,
        action.payload.quantity
      );
      // console.log("after item: ", items);
      return {
        ...state,
        cartItems: items,
        totalPrice: calculateTotalPrice(items),
        totalItems: items.length,
      };
    }
    case REMOVE_ITEM_WITH_QUANTITY: {
      const items = removeItemWithQuantityFromCart(
        state.cartItems,
        action.payload
      );
      // console.log("items:", items);
      return {
        ...state,
        cartItems: items,
        totalPrice: calculateTotalPrice(items),
        totalItems: items.length,
      };
    }

    case REMOVE_ITEM: {
      const items = removeItemFromCart(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: items,
        totalPrice: calculateTotalPrice(items),
        totalItems: items.length,
      };
    }

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id === action.payload.id
        ),
        totalPrice: 0,
        totalItems: 0,
      };

    default:
      return state;
  }
};
