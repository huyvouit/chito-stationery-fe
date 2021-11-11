import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  //Context data
  const ProductContextData = {
    productList,
    setProductList,
  };
  console.log("product");
  return (
    <ProductContext.Provider value={ProductContextData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
