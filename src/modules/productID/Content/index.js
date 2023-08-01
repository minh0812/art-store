import React, { useState } from "react";
import { Col, Image, Rate, Row, Tag } from "antd";
import { ShoppingCartOutlined, CarOutlined } from "@ant-design/icons";
import "./Content.scss";
import PropTypes from "prop-types";

const Content = ({ product, id }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);
  return (
    <div className="Content">
      <Row>
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
          <div className="Content__info">
            <h1 className="Content__info__name">{product.name}</h1>
            <div className="Content__info__rate">
              <span className="Content__info__rate__number">
                {product.rate}
              </span>
              <Rate disabled defaultValue={product.rate} />
              <span className="Content__info__rate__sold">
                ({product.sold} Sold)
              </span>
            </div>
            <div className="Content__info__price">
              <div className="Content__info__price__old">${product.price}</div>
              <div className="Content__info__price__current">
                ${product.price * (1 - product.sale)}
              </div>
              <div className="Content__info__price__sale">
                {product.sale * 100}% off
              </div>
            </div>
            <div className="Content__info__shipping">
              <span className="Content__info__shipping__title">Shipping:</span>
              <span className="Content__info__shipping__content">
                <p>
                  <Tag color="green">
                    <CarOutlined /> Free shipping
                  </Tag>
                </p>
                <p>Free shipping for orders over $100</p>
              </span>
            </div>
            <div className="Content__info__quantity">
              <span className="Content__info__quantity__title">Quantity:</span>
              <div className="Content__info__quantity__input">
                <button className="Content__info__quantity__input__btn">
                  -
                </button>
                <input
                  type="text"
                  className="Content__info__quantity__input__number"
                  value="1"
                />
                <button className="Content__info__quantity__input__btn">
                  +
                </button>
              </div>
            </div>
            <div className="Content__info__btn">
              <button className="Content__info__btn__add">
                <ShoppingCartOutlined /> Add to cart
              </button>
              <button className="Content__info__btn__buy">Buy now</button>
            </div>
          </div>
        </Col>
      </Row>
      <div className="Content__description">
        <h2 className="Content__description__title">Description</h2>
        <p className="Content__description__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, voluptate voluptas quod quos dolorum
          voluptatibus quae quidem fugiat? Quisquam voluptatum, quibusdam, quia,
          voluptate voluptas quod quos dolorum voluptatibus quae quidem fugiat?
          Quisquam voluptatum, quibusdam, quia, voluptate voluptas quod quos
          dolorum voluptatibus quae quidem fugiat? Quisquam voluptatum,
          quibusdam, quia, voluptate voluptas quod quos dolorum voluptatibus
          quae quidem fugiat? Quisquam voluptatum, quibusdam, quia, voluptate
          voluptas quod quos dolorum voluptatibus quae quidem fugiat? Quisquam
        </p>
      </div>
    </div>
  );
};

Content.propTypes = {};

export default Content;
