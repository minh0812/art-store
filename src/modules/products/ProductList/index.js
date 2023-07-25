import React from "react";
import Product from "../../../components/Product";
import "./ProductList.scss";
import { Col, Row } from "antd";

const ProductList = () => {
  return (
    <div className="ProductList">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
        <Col xs={24} sm={12} md={12} lg={8} xl={6}>
          <Product />
        </Col>
      </Row>
    </div>
  );
};

export default ProductList;
