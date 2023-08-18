import { Card, Rate } from "antd";
import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import { formatPrice } from "../../utils";
import { useNavigate } from "react-router-dom";
const Product = ({ name, sale, price, image, rate, sold, id }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <Card className="Product" onClick={handleProductClick}>
      <div className="Product__image">
        <img src={image} alt={name} />
      </div>
      <h3 className="Product__name">
        {name.length > 35 ? name.slice(0, 35) + "..." : name}
      </h3>
      <div className="Product__price">
        {sale !== 0 && (
          <p className="Product__price__real">{sale !== 0 && `$${price}`}</p>
        )}
        <p className="Product__price__sale">
          {sale !== 0 ? formatPrice(price - price * sale) : formatPrice(price)}
        </p>
      </div>
      <div className="Product__rating">
        <Rate allowHalf value={rate} disabled />
        <span> ({sold})</span>
      </div>
    </Card>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  sale: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  rate: PropTypes.number,
  sold: PropTypes.number,
  id: PropTypes.number,
};

Product.defaultProps = {
  name: "",
  sale: 0,
  price: 0,
  image: "",
  rate: 0,
  sold: 0,
  id: 0,
};

export default Product;
