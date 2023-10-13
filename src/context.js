import { createContext, useEffect, useState } from "react";
import productsData from "./assets/data/products.json";
import cartsData from "./assets/data/carts.json";
import { useCookies } from "react-cookie";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["isLogin"]);
  const [isLogin, setIsLogin] = useState(false);
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
  const [kist, setKist] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setProducts(productsData);
    if (cookies.isLogin) {
      setIsLogin(true);
      setCarts(cartsData);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

        cookies,
        setCookie,
        removeCookie,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
