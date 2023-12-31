import React, { useContext, useEffect } from "react";
import { MyExamContext, useExamContext } from "../context/FinalExamContext";

export default function About() {
  const { products } = useExamContext();
  useEffect(() => {
    console.log(products);
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <>
            <h1>{product.title}</h1>
            <p1>{product.description}</p1>
          </>
        );
      })}
    </div>
  );
}
