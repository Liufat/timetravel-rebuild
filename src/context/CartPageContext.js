import { createContext, useContext, useReducer } from "react";
import { useCart } from "./CartContext";

const CarPageContext = createContext();

function CartPageProvider({ children }) {
  const { cartFoodState } = useCart();
  console.log(cartFoodState);
  //顯示購物車用的context
  const initialCartPage = {
    allPages: ["住宿", "美食", "票券", "資料確認", "結帳"],
    nowPage: 0,
  };

  const cartPageReducer = (state, action) => {
    switch (action.type) {
      case "NEXT_PAGE":
        if (state.nowPage < state.allPages.length) {
          return { ...state, nowPage: state.nowPage + 1 };
        }
        return { ...state };

      case "PRE_PAGE":
        if (state.nowPage > 0) {
          return { ...state, nowPage: state.nowPage - 1 };
        }
        return { ...state };

      case "SELECT_PAGE":
        return { ...state, nowPage: action.payload };
      default:
        throw new Error(`不存在的action type: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(cartPageReducer, initialCartPage);
  const selectPage = (page) => {
    dispatch({ type: "SELECT_PAGE", payload: page });
  };

  const nextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };
  const prePage = () => {
    dispatch({ type: "PRE_PAGE" });
  };

  return (
    <CarPageContext.Provider
      value={{
        cartPageState: state,
        selectPage: selectPage,
        nextPage: nextPage,
        prePage: prePage,
      }}
    >
      {children}
    </CarPageContext.Provider>
  );
}

const useCartPage = () => {
  const context = useContext(CarPageContext);
  if (context === undefined)
    throw new Error("CartPageContext was used outside of the CartPageProvider");
  return context;
};

export { CartPageProvider, useCartPage };
