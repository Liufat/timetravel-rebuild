import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext();

function CartProvider({ children }) {
  //購物車內容用的context
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

  const addCartFunction = (state, action) => {
    const existingItemIndex = isItemExisting(state.cartItems, action.payload);
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
  };

  const removeCartFunction = (state, action) => {
    const newItems = [...state.cartItems];
    const newFilterItems = newItems.filter((item) => {
      return item.type !== action.payload.type || item.id !== action.payload.id;
    });
    const newResult = {
      ...state,
      cartItems: newFilterItems,
      totalItems: state.totalItems - 1,
    };

    return newResult;
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_CART":
        return addCartFunction(state, action);
      case "REMOVE_CART":
        return removeCartFunction(state, action);

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

  const removeCart = (item) => {
    dispatch({ type: "REMOVE_CART", payload: item });
  };
  return (
    <CartContext.Provider
      value={{ cartState: state, addCart: addCart, removeCart: removeCart }}
    >
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
