import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

function CartProvider({ children }) {
  const isItemExisting = (item, payload) => {
    const existingItemIndex = item.findIndex(
      (item) => item.type === payload.type && item.id === payload.id
    );
    return existingItemIndex;
  };

  let initialCartItems = {
    cartItems: [],
    isEmpty: true,
    totalItems: 0,
  };

  const init = (initialCartItems) => {
    if (initialCartItems.cartItems !== 0) {
      return {
        cartItems: initialCartItems.cartItems,
        totalItems: initialCartItems.cartItems.length,
        isEmpty: false,
      };
    }
    return { ...initialCartItems };
  };

  if (!initialCartItems.cartItems.length) {
    try {
      const item = useLocalStorage.get("TimeTravelCart");
      initialCartItems.cartItems = item ? item : [];
    } catch (err) {
      initialCartItems.cartItems = [];
      throw new Error(err);
    }
  }

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

  const [state, dispatch] = useReducer(cartReducer, initialCartItems, init);

  // console.log(state);

  useEffect(() => {
    if (
      JSON.stringify(state.cartItems) !== useLocalStorage.get("TimeTravelCart")
    ) {
      useLocalStorage.set("TimeTravelCart", state.cartItems);
    }
  }, [state.cartItems]);

  const addCart = (cartItems) => {
    dispatch({ type: "ADD_CART", payload: cartItems });
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
