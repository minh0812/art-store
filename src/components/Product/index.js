import { Card, Rate } from "antd";
import React from "react";
import "./Product.scss";
const Product = () => {
  return (
    <Card className="Product">
      <div className="Product__image">
        <img
          src="https://i.ibb.co/4WX5r2n/1668761610394241431559-381715643464775-6792472015771885778-n-png.png"
          alt="product"
        />
      </div>
      <h3 className="Product__name">Product Name</h3>
      <div className="Product__price">
        <p className="Product__price__real"> $ 100</p>
        <p className="Product__price__sale"> $ 80</p>
      </div>
      <div className="Product__rating">
        <Rate allowHalf defaultValue={4.5} disabled />
        <span> (100)</span>
      </div>
    </Card>
  );
};

export default Product;
