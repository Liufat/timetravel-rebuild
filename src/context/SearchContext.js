import { createContext, useContext, useReducer } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const searchReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_DESTINATION":
        return {
          ...state,
          filter: { ...state.filter, destination: action.payload },
        };

      case "CHANGE_COLLECT":
        return {
          ...state,
          filter: { ...state.filter, collect: action.payload },
        };
      case "CHANGE_KEYWORD":
        return {
          ...state,
          filter: { ...state.filter, keyword: action.payload },
        };

      case "INITIAL":
        return {
          ...state,
          filter: { destination: "", collect: "" },
        };

      default:
        throw new Error(`不存在的action type: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(searchReducer, {
    filter: { destination: "", collect: "" },
  });

  const changeDestination = (destination) => {
    dispatch({ type: "CHANGE_DESTINATION", payload: destination });
  };

  const changeCollect = (collect) => {
    dispatch({ type: "CHANGE_COLLECT", payload: collect });
  };

  const changeKeyword = (keyword) => {
    dispatch({ type: "CHANGE_KEYWORD", payload: keyword });
  };

  const searchInitial = () => {
    dispatch({ type: "INITIAL" });
  };

  return (
    <SearchContext.Provider
      value={{
        state: state,
        changeDestination: changeDestination,
        changeCollect: changeCollect,
        searchInitial: searchInitial,
        changeKeyword: changeKeyword,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("SearchContext was used outside of the SearchProvider");
  return context;
}

export { SearchProvider, useSearch };
