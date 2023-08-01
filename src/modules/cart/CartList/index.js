import React from "react";
import PropTypes from "prop-types";
import "./CartList.scss";
import CartItem from "../CartItem";
import { Checkbox, Col, Row } from "antd";

const CartList = (props) => {
  return (
    <div className="CartList">
      <Row className="CartList__header">
        <Col span={1} className="CartList__header__check">
          <Checkbox />
        </Col>
        <Col span={8} className="CartList__header__image">Product</Col>
        <Col span={3} className="CartList__header__price">Price</Col>
        <Col span={4} className="CartList__header__quantity">Quantity</Col>
        <Col span={3} className="CartList__header__total">Total</Col>
        <Col span={3} className="CartList__header__remove">Remove</Col>
      </Row>
      <div className="CartList__body">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

CartList.propTypes = {};

export default CartList;
