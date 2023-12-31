import { createContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

function CartProvider({ children }) {
  // cart={
  //     foodCart:[{name:OOXX,quantity:OOXX},{name:OOXX,quantity:OOXX}],hotelCart:{},ticketCart:{}
  // }
  const initialCartItems = useLocalStorage.get("cart");

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_CART":
        return {
          ...state,
          [action.cartType]: state[action.cartType].push(action.payload),
        };

      case "REMOVE_CART":
        return {
          ...state,
          [action.cartType]: state[action.cartType].filter(
            (item) => item !== action.payload
          ),
        };

      default:
        throw new Error(`不存在的action type: ${action.type}`);
    }
  };
  const [state, dispatch] = useReducer(cartReducer, {
    cart: initialCartItems,
  });

  const addCart = (cartType, cartItems) => {
    dispatch({ type: "ADD_CART", cartType: cartType, payload: cartItems });
    useLocalStorage.set()
  };
}
