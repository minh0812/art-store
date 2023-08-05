import React from "react";
import PropTypes from "prop-types";
import "./CartItem.scss";
import { Checkbox, Col, Row, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const CartItem = (props) => {
  const cartItems = [
    {
      id: 1,
      name: "Water soluble oil pastels rustic",
      price: 80,
      sale: 0.1,
      rate: 4,
      sold: 100,
      images: [
        "https://i.ibb.co/PwkHF4s/16687670281216553506319322-jpg.jpg",
        "https://i.ibb.co/Hh3SbKs/16687670281206553506319321-jpg.jpg",
        "https://i.ibb.co/tZgx88H/16687668741166553506319251-jpg.jpg",
        "https://i.ibb.co/TvN6qgS/16687668741176553506319252-jpg.jpg",
        "https://i.ibb.co/qN7jksp/166876370841307e69cecce3273dcfb24bd2201d7c4ab-jpg.jpg",
        "https://i.ibb.co/P4Zy1JD/1668764987042655350636722-1-jpg.jpg",
        "https://i.ibb.co/G5qMTGd/1668763708414watercolor04-png.png",
      ],
      quantity: 1,
    },
  ];
  return (
    <Row className="CartItem">
      <Col span={1} className="CartItem__check">
        <Checkbox />
      </Col>
      <Col span={8} className="CartItem__info">
        <img
          src="https://i.ibb.co/PwkHF4s/16687670281216553506319322-jpg.jpg"
          alt="Water soluble oil pastels rustic"
          className="CartItem__info__image"
        />
        <div className="CartItem__info__name">
          Water soluble oil pastels rustic
        </div>
      </Col>
      <Col span={3} className="CartItem__price">
        <div className="CartItem__price__old">$80.00</div>
        <div className="CartItem__price__current">$72.00</div>
      </Col>
      <Col span={4} className="CartItem__quantity">
        <button className="CartItem__quantity__btn">-</button>
        <input type="text" value="1" className="CartItem__quantity__number" />
        <button className="CartItem__quantity__btn">+</button>
      </Col>
      <Col span={3} className="CartItem__total">
        $72.00
      </Col>
      <Col span={3} className="CartItem__remove">
        <Tooltip title="Remove">
          <DeleteOutlined />
        </Tooltip>
      </Col>
    </Row>
  );
};

CartItem.propTypes = {};

export default CartItem;
