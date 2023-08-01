import React from "react";
import Product from "../../../components/Product";
import "./ProductList.scss";
import { Col, Row } from "antd";
import products from "../../../assets/data/products.json"

const ProductList = () => {
  return (
    <div className="ProductList">
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={12} lg={8} xl={6}>
            <Product
              name={product.name}
              image={product.images[0]}
              price={product.price}
              sale={product.sale}
              rate={product.rate}
              sold={product.sold}
              id={product.id}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
