import React, { useEffect, useState } from "react";
import { Col, Image, Rate, Row, Tag } from "antd";
import { ShoppingCartOutlined, CarOutlined } from "@ant-design/icons";
import "./Content.scss";
import PropTypes from "prop-types";

const Content = ({ images, name, rate, sale, sold, price }) => {
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);
  return (
    <div className="Content">
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="Content__image">
            <div className="Content__image__main">
              <Image.PreviewGroup items={images}>
                <Image src={mainImage} alt={name} />
              </Image.PreviewGroup>
            </div>
            <div className="Content__image__sub">
              <Image.PreviewGroup>
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={name}
                    onMouseEnter={() => setMainImage(image)}
                  />
                ))}
              </Image.PreviewGroup>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="Content__info">
            <h1 className="Content__info__name">{name}</h1>
            <div className="Content__info__rate">
              <span className="Content__info__rate__number">{rate}</span>
              <Rate disabled defaultValue={rate} />
              <span className="Content__info__rate__sold">({sold} Sold)</span>
            </div>
            <div className="Content__info__price">
              {sale !== 0 && (
                <div className="Content__info__price__old">${price}</div>
              )}
              <div className="Content__info__price__current">
                ${price * (1 - sale)}
              </div>
              {sale !== 0 && (
                <div className="Content__info__price__sale">
                  {sale * 100}% off
                </div>
              )}
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
                <button
                  className="Content__info__quantity__input__btn"
                  onClick={() => +quantity > 1 && setQuantity(+quantity - 1)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="Content__info__quantity__input__number"
                  value={quantity}
                  onChange={(e) =>
                    !isNaN(e.target.value) && setQuantity(e.target.value)
                  }
                />
                <button
                  className="Content__info__quantity__input__btn"
                  onClick={() => setQuantity(+quantity + 1)}
                >
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

Content.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
  rate: PropTypes.number,
  sale: PropTypes.number,
  sold: PropTypes.number,
  price: PropTypes.number,
};

Content.defaultProps = {
  images: [],
  name: "",
  rate: 0,
  sale: 0,
  sold: 0,
  price: 0,
};

export default Content;
