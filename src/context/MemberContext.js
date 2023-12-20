import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const MemberContext = createContext();

function MemberProvider({ children }) {
  const [member, setMember] = useState("");

  if (member === "" && useLocalStorage.get("member")) {
    setMember(useLocalStorage.get("member"));
  }

  return (
    <MemberContext.Provider value={{ member: member, setMember: setMember }}>
      {children}
    </MemberContext.Provider>
  );
}

function useMemberContext() {
  const context = useContext(MemberContext);
  if (context === undefined)
    throw new Error("MemberContext was used outside of the MemberProvider");
  return context;
}

export { MemberProvider, useMemberContext };
