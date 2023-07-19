import { Col, Row } from "antd";
import React from "react";
import NavLeft from "../../modules/products/NavLeft";
import ProductList from "../../modules/products/ProductList";
import Title from "../../modules/products/Title";

const ProductsPage = () => {
  return (
    <>
      <Title />
      <Row>
        <Col span={6}>
          <NavLeft />
        </Col>
        <Col span={18}>
          <ProductList />
        </Col>
      </Row>
    </>
  );
};

export default ProductsPage;
