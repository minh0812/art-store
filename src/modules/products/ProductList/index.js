import React, { useContext } from "react";
import Product from "../../../components/Product";
import "./ProductList.scss";
import { Col, Row } from "antd";
import { AppContext } from "../../../context";

const ProductList = () => {
  const { products } = useContext(AppContext);
  return (
    <div className="ProductList">
      <Row gutter={[16, 16]}>
        {products.map((product, index) => (
          <Col xs={24} sm={12} md={12} lg={8} xl={6} key={index}>
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
