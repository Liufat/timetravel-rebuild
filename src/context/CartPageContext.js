import { createContext, useContext, useReducer } from "react";

const CarPageContext = createContext();

function CartPageProvider({ children }) {
  //顯示購物車用的context
  const initialCartPage = {
    allPages: ["住宿", "美食", "票券", "資料確認", "結帳"],
    nowPage: 0,
  };

  const cartPageReducer = (state, action) => {
    switch (action.type) {
      case "NEXT_PAGE":
        if (state.nowPage < state.allPage.length) {
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

  return (
    <CarPageContext.Provider
      value={{ cartPageState: state, selectPage: selectPage }}
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
