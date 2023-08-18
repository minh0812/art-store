import React, { useContext, useEffect } from "react";
import Title from "../../components/Title";
import CartList from "../../modules/cart/CartList";
import { AppContext } from "../../context";

const Cart = () => {
  const { carts, setCarts } = useContext(AppContext);
  useEffect(() => {
    setCarts(carts.map((cart) => ({ ...cart, check: false })));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Title
        title={"cart"}
        items={[
          { content: "home", link: "/" },
          { content: "cart", link: "/cart" },
        ]}
      />
      <CartList />
    </>
  );
};

export default Cart;
