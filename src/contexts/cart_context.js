import { createContext, useReducer, useEffect } from "react";
import {
  ADD_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  REMOVE_ITEM_WITH_QUANTITY,
} from "../actions/action_type";
import { CART } from "../constants/constant";
import { cartReducer } from "../reducers/cart_reducer";

export const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem(CART)) || {
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};

const CartContextProvider = ({ children }) => {
  //   const { saveCart } = useRef(initialState);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem(CART, JSON.stringify(state));
    console.log("save local");
  }, [state]);
  // console.log(state);
  const addItem = (item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };
  const removeItem = (item) =>
    dispatch({
      type: REMOVE_ITEM,
      payload: item,
    });
  const removeItemWithQuantity = (item) =>
    dispatch({
      type: REMOVE_ITEM_WITH_QUANTITY,
      payload: item,
    });
  const clearItemFromCart = (item) =>
    dispatch({
      type: CLEAR_ITEM_FROM_CART,
      payload: item,
    });

  const cartContextData = {
    state,
    addItem,
    removeItem,
    removeItemWithQuantity,
    clearItemFromCart,
  };

  // Return provider
  return (
    <CartContext.Provider value={cartContextData}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
