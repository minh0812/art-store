import { createContext, useEffect, useState } from "react";
import productsData from "./assets/data/products.json";
import cartsData from "./assets/data/carts.json";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
  const [kist, setKist] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setProducts(productsData);
    setCarts(cartsData.map((cart) => ({ ...cart, check: false })));
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLogin,
        carts,
        products,
        kist,
        gallery,

        setIsLogin,
        setCarts,
        setProducts,
        setKist,
        setGallery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
