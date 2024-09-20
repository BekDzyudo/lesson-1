import { createContext, useState } from "react";

export const GlobalContext = createContext();

let color = ["#475569", "#1230AE", "#CD5C08", "#00712D"];

export function GlobalContextProvider({ children }) {
  const [activeColor, setActiveColor] = useState("#475569");
  return (
    <GlobalContext.Provider value={{ color, setActiveColor, activeColor }}>
      {children}
    </GlobalContext.Provider>
  );
}
