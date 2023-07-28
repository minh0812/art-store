import React, { useState } from "react";
import { Col, Image, Row } from "antd";
import "./Content.scss";
import PropTypes from "prop-types";

const Content = ({ product, id }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);
  return (
    <Row className="Content">
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div className="Content__image">
          <div className="Content__image__main">
            <Image.PreviewGroup items={product.images}>
              <Image src={mainImage} alt={product.name} />
            </Image.PreviewGroup>
          </div>
          <div className="Content__image__sub">
            <Image.PreviewGroup>
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={product.name}
                  //   className={mainImage === image ? "active" : ""}
                  onMouseEnter={() => setMainImage(image)}
                />
              ))}
            </Image.PreviewGroup>
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <h1>{product.name}</h1>
      </Col>
    </Row>
  );
};

Content.propTypes = {};

export default Content;
