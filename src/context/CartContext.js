import { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

function CartProvider({ children }) {
  // cart={
  //     foodCart:[{name:OOXX,quantity:OOXX},{name:OOXX,quantity:OOXX}],hotelCart:{},ticketCart:{}
  // }
  const isItemExisting = (item, payload) => {
    const existingItemIndex = item.findIndex(
      (item) => item.type === payload.type && item.id === payload.id
    );
    return existingItemIndex;
  };
  const initialCartItems = {
    cartItems: [],
    isEmpty: true,
    totalItems: 0,
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_CART":
        const existingItemIndex = isItemExisting(
          state.cartItems,
          action.payload
        );
        if (existingItemIndex > -1) {
          return {
            cartItems: [...state.cartItems],
            isEmpty: false,
            totalItems: state.totalItems,
          };
        }
        return {
          cartItems: [...state.cartItems, action.payload],
          isEmpty: false,
          totalItems: state.totalItems + 1,
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
    ...initialCartItems,
  });

  const addCart = (cartItems) => {
    dispatch({ type: "ADD_CART", payload: cartItems });
    useLocalStorage.set("cart", state);
  };

  return (
    <CartContext.Provider value={{ cartState: state, addCart: addCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside of the CartProvider");
  return context;
}
export { CartProvider, useCart };
