import React, { useState, useContext, useEffect } from "react";
import Product from "../../../components/Product";
import { Col, Row } from "antd";
import "./RelatedProduct.scss";
import { AppContext } from "../../../context";

const RelatedProduct = ({ id, category }) => {
  const { products } = useContext(AppContext);
  const [productSimilar, setProductSimilar] = useState([]);

  useEffect(() => {
    const productSimilar = products.filter(
      (product) => product.category_id === category && product.id !== id
    );
    setProductSimilar(
      productSimilar.sort(() => Math.random() - 0.5).slice(0, 8)
    );
  }, [id, category, products]);

  return (
    <div className="RelatedProduct">
      <h1 className="RelatedProduct__title">Related products</h1>
      <Row gutter={[16, 16]}>
        {productSimilar.map((product, index) => (
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
