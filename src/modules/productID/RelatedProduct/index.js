import React from "react";
import PropTypes from "prop-types";
import products from "../../../assets/data/products.json";
import Product from "../../../components/Product";
import { Col, Row } from "antd";
import "./RelatedProduct.scss";

const RelatedProduct = (props) => {
  const product = products.slice(0, 4);
  return (
    <div className="RelatedProduct">
      <h1 className="RelatedProduct__title">Related products</h1>
      <Row gutter={[16, 16]}>
        {product.map((product, index) => (
          <Col xs={24} sm={12} md={12} lg={6} xl={6} key={index}>
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

RelatedProduct.propTypes = {};

export default RelatedProduct;
