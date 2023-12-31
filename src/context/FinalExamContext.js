import React, { createContext, useContext, useState } from "react";

export const MyExamContext = createContext();

export const MyExamInformationProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // states
  return (
    <MyExamContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </MyExamContext.Provider>
  );
};

export const useExamContext = () => {
  const context = useContext(MyExamContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
