import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import useCartFilter from "../hooks/useCartFilter";

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

  const editCartFunction = (state, action) => {
    const existingItemIndex = isItemExisting(
      state.cartItems,
      action.payload.targetItem
    );
    if (existingItemIndex > -1) {
      // 2.如果有找到重複項目的index，則先複製一個與state.items相同的array
      const newItems = [...state.cartItems];
      // 3.然後將array的指定index項目，對比action.payload，若有相同props則進行取代
      newItems[existingItemIndex] = {
        ...newItems[existingItemIndex],
        ...action.payload.changingTarget,
      };

      const newResult = { ...state, cartItems: newItems };

      return newResult;
    }

    return state;
  };

  const quantityPlusOne = (item) => {
    editCart(item, { quantity: item.quantity + 1 });
  };

  const quantityMinusOne = (item) => {
    if (item.quantity > 1) {
      editCart(item, { quantity: item.quantity - 1 });
    }
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_CART":
        return addCartFunction(state, action);
      case "REMOVE_CART":
        return removeCartFunction(state, action);
      case "EDIT_CART":
        return editCartFunction(state, action);

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

  const editCart = (targetItem, changingTarget) => {
    dispatch({
      type: "EDIT_CART",
      payload: { targetItem: targetItem, changingTarget: changingTarget },
    });
  };
  const cartFoodState = useCartFilter(state, "food") || [];
  const cartHotelState = useCartFilter(state, "hotel") || [];
  const cartTicketState = useCartFilter(state, "ticket") || [];

  return (
    <CartContext.Provider
      value={{
        cartState: state,
        cartFoodState,
        cartHotelState,
        cartTicketState,
        addCart: addCart,
        removeCart: removeCart,
        editCart: editCart,
        quantityPlusOne: quantityPlusOne,
        quantityMinusOne: quantityMinusOne,
      }}
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
