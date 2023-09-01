import React, { useContext, useEffect, useState } from "react";
import "./CartList.scss";
import CartItem from "../CartItem";
import { Button, Checkbox, Col, Row } from "antd";
import { AppContext } from "../../../context";
import { formatPrice } from "../../../utils";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const navigate = useNavigate();
  const { carts, setCarts } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  const [checkAll, setCheckAll] = useState(false);

  const handleCheck = (id) => {
    const newCartList = carts.map((cart) =>
      cart.id === id ? { ...cart, check: !cart.check } : cart
    );
    setCarts(newCartList);
  };

  const handleCheckAll = () => {
    setCheckAll(!checkAll);
    if (checkAll) {
      const newCartList = carts.map((cart) => ({ ...cart, check: false }));
      setCarts(newCartList);
      return;
    }
    const newCartList = carts.map((cart) => ({ ...cart, check: true }));
    setCarts(newCartList);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    if (!carts) return;
    const newTotal = carts.reduce(
      (total, cart) =>
        cart.check
          ? total + cart.price * cart.quantity * (1 - cart.sale)
          : total,
      0
    );
    setTotal(newTotal);
  }, [carts]);

  return (
    <div className="CartList">
      {window.innerWidth < 768 ? (
        <Row className="CartList__header">
          <Col span={1} className="CartList__header__check"></Col>
          <Col span={14} className="CartList__header__image">
            Product
          </Col>
          <Col span={6} className="CartList__header__quantity">
            Quantity
          </Col>
          <Col span={3} className="CartList__header__remove">
            Remove
          </Col>
        </Row>
      ) : (
        <Row className="CartList__header">
          <Col span={1} className="CartList__header__check"></Col>
          <Col span={8} className="CartList__header__image">
            Product
          </Col>
          <Col span={3} className="CartList__header__price">
            Price
          </Col>
          <Col span={4} className="CartList__header__quantity">
            Quantity
          </Col>
          <Col span={3} className="CartList__header__total">
            Total
          </Col>
          <Col span={3} className="CartList__header__remove">
            Remove
          </Col>
        </Row>
      )}

      <div className="CartList__body">
        {carts?.map((cart) => (
          <CartItem
            handleCheck={handleCheck}
            check={cart.check}
            key={cart.id}
            id={cart.id}
            name={cart.name}
            images={cart.images}
            price={cart.price}
            sale={cart.sale}
            quantity={cart.quantity}
          />
        ))}
      </div>
      <div className="CartList__footer">
        <div className="CartList__footer__left">
          <div className="CartList__footer__left__selectAll">
            <Checkbox onChange={handleCheckAll} checked={checkAll} />
            <span className="CartList__footer__left__selectAll__title">
              Select all
            </span>
          </div>
        </div>
        <div className="CartList__footer__right">
          <div className="CartList__footer__right__total">
            <p>
              Total: <span>{formatPrice(total)}</span>
            </p>
          </div>
          <Button type="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
