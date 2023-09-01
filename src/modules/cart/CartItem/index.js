import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./CartItem.scss";
import { Checkbox, Col, Row, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { formatPrice } from "../../../utils";
import { AppContext } from "../../../context";
import { Link } from "react-router-dom";

const CartItem = ({
  id,
  name,
  images,
  price,
  sale,
  quantity,
  check,
  handleCheck,
}) => {
  const { setCarts } = useContext(AppContext);
  const [quantityItem, setQuantityItem] = useState(quantity);

  const handleRemove = (id) => {
    setCarts((prev) => prev.filter((cart) => cart.id !== id));
  };

  return window.innerWidth < 768 ? (
    <Row className="CartItem">
      <Col span={1} className="CartItem__check">
        <Checkbox checked={check} onChange={() => handleCheck(id)} />
      </Col>
      <Col span={14} className="CartItem__info">
        <Link to={`/products/${id}`}>
          <img
            src={images[0]}
            alt="product"
            className="CartItem__info__image"
          />
          <div>
            <div className="CartItem__info__name">{name}</div>
            <div className="CartItem__info__price">
              {sale > 0 && (
                <div className="CartItem__info__price__old">
                  {formatPrice(price)}
                </div>
              )}
              <div className="CartItem__info__price__current">
                {formatPrice(price - price * sale)}
              </div>
            </div>
          </div>
        </Link>
      </Col>
      <Col span={6} className="CartItem__quantity">
        <button
          className="CartItem__quantity__btn"
          onClick={(e) => {
            if (quantityItem <= 1) return;
            setQuantityItem(quantityItem - 1);
            setCarts((prev) =>
              prev.map((cart) =>
                cart.id === id ? { ...cart, quantity: quantityItem - 1 } : cart
              )
            );
          }}
        >
          -
        </button>
        <input
          type="text"
          value={quantityItem}
          onChange={(e) => {
            if (isNaN(e.target.value)) return;
            setQuantityItem(e.target.value);
          }}
          className="CartItem__quantity__number"
        />
        <button
          className="CartItem__quantity__btn"
          onClick={(e) => {
            setQuantityItem(quantityItem + 1);
            setCarts((prev) =>
              prev.map((cart) =>
                cart.id === id ? { ...cart, quantity: quantityItem + 1 } : cart
              )
            );
          }}
        >
          +
        </button>
      </Col>
      <Col span={3} className="CartItem__remove">
        <Tooltip title="Remove">
          <DeleteOutlined
            onClick={() => {
              handleRemove(id);
            }}
          />
        </Tooltip>
      </Col>
    </Row>
  ) : (
    <Row className="CartItem">
      <Col span={1} className="CartItem__check">
        <Checkbox checked={check} onChange={() => handleCheck(id)} />
      </Col>
      <Col span={8} className="CartItem__info">
        <Link to={`/products/${id}`}>
          <img
            src={images[0]}
            alt="product"
            className="CartItem__info__image"
          />
          <div className="CartItem__info__name">{name}</div>
        </Link>
      </Col>
      <Col span={3} className="CartItem__price">
        {sale > 0 && (
          <div className="CartItem__price__old">{formatPrice(price)}</div>
        )}
        <div className="CartItem__price__current">
          {formatPrice(price - price * sale)}
        </div>
      </Col>
      <Col span={4} className="CartItem__quantity">
        <button
          className="CartItem__quantity__btn"
          onClick={(e) => {
            if (quantityItem <= 1) return;
            setQuantityItem(quantityItem - 1);
            setCarts((prev) =>
              prev.map((cart) =>
                cart.id === id ? { ...cart, quantity: quantityItem - 1 } : cart
              )
            );
          }}
        >
          -
        </button>
        <input
          type="text"
          value={quantityItem}
          onChange={(e) => {
            if (isNaN(e.target.value)) return;
            setQuantityItem(e.target.value);
          }}
          className="CartItem__quantity__number"
        />
        <button
          className="CartItem__quantity__btn"
          onClick={(e) => {
            setQuantityItem(quantityItem + 1);
            setCarts((prev) =>
              prev.map((cart) =>
                cart.id === id ? { ...cart, quantity: quantityItem + 1 } : cart
              )
            );
          }}
        >
          +
        </button>
      </Col>
      <Col span={3} className="CartItem__total">
        {formatPrice((price - price * sale) * quantityItem)}
      </Col>
      <Col span={3} className="CartItem__remove">
        <Tooltip title="Remove">
          <DeleteOutlined
            onClick={() => {
              handleRemove(id);
            }}
          />
        </Tooltip>
      </Col>
    </Row>
  );
};

CartItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.number,
  sale: PropTypes.number,
  quantity: PropTypes.number,
  check: PropTypes.bool,
};

CartItem.defaultProps = {
  id: 0,
  name: "",
  images: [],
  price: 0,
  sale: 0,
  quantity: 0,
  check: false,
};

export default CartItem;
