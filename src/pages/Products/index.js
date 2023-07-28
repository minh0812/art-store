import { Col, Row } from "antd";
import React from "react";
import NavLeft from "../../modules/products/NavLeft";
import ProductList from "../../modules/products/ProductList";
import Title from "../../components/Title";
import { Outlet } from "react-router-dom";

const ProductsPage = () => {
  return (
    <>
      <Title />
      <Outlet />
      <Row>
        <Col span={5}>
          <NavLeft />
        </Col>
        <Col span={19}>
          <ProductList />
        </Col>
      </Row>
    </>
  );
};

export default ProductsPage;
