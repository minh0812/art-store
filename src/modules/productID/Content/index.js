import React, { useContext, useEffect, useState } from "react";
import { Col, Image, Modal, Rate, Row, Space, Tag, message } from "antd";
import {
  ShoppingCartOutlined,
  CarOutlined,
  LeftOutlined,
  RightOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import "./Content.scss";
import PropTypes from "prop-types";
import { AppContext } from "../../../context";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../../utils";
import Review from "../../../components/Review";

const Content = ({
  images,
  name,
  rate,
  sale,
  sold,
  price,
  id,
  description,
  reviews,
}) => {
  const navigate = useNavigate();
  const [indexFirstImageRender, setIndexFirstImageRender] = useState(0);
  const { carts, setCarts, isLogin } = useContext(AppContext);
  const [mainImage, setMainImage] = useState("");
  const [imagesRender, setImagesRender] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isShowImageReview, setIsShowImageReview] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const handleAddToCart = () => {
    if (quantity <= 0) {
      message.error("Please enter a valid quantity!");
      return;
    }
    if (!isLogin) {
      message.info("Please login to use this feature!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      return;
    }
    const check = carts.find((cart) => cart.id === id);
    if (check) {
      setCarts((prev) =>
        prev.map((cart) =>
          cart.id === id
            ? { ...cart, quantity: cart.quantity + quantity }
            : cart
        )
      );
    } else {
      setCarts((prev) => [
        { id, name, images, price, sale, quantity, check: false },
        ...prev,
      ]);
    }
    message.success("Product added to cart successfully!");
  };

  const handleBuyNow = () => {
    if (quantity <= 0) {
      message.error("Please enter a valid quantity!");
      return;
    }
    if (!isLogin) {
      message.info("Please login to use this feature!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      return;
    }
    setCarts(carts.map((cart) => ({ ...cart, check: false })));
    const check = carts.find((cart) => cart.id === id);
    if (check) {
      setCarts((prev) =>
        prev.map((cart) =>
          cart.id === id
            ? { ...cart, quantity: cart.quantity + quantity, check: true }
            : cart
        )
      );
    } else {
      setCarts((prev) => [
        { id, name, images, price, sale, quantity, check: true },
        ...prev,
      ]);
    }
    message.success("Product added to cart successfully!");
    setTimeout(() => {
      navigate("/checkout");
    }, 1000);
  };

  useEffect(() => {
    setMainImage(images[0]);
    setImagesRender(images.slice(0, 4));
  }, [images]);
  return (
    <div className="Content">
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="Content__image">
            <div className="Content__image__main">
              <Image
                src={mainImage}
                alt={name}
                preview={false}
                onClick={() => setIsShowImageReview(true)}
              />
            </div>
            <div
              className="Content__image__sub"
              onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (e.changedTouches[0].clientX - touchStart > 50) {
                  if (indexFirstImageRender > 0) {
                    setIndexFirstImageRender(indexFirstImageRender - 1);
                    setImagesRender(
                      images.slice(
                        indexFirstImageRender - 1,
                        indexFirstImageRender + 3
                      )
                    );
                  }
                } else if (e.changedTouches[0].clientX - touchStart < -50) {
                  if (indexFirstImageRender < images.length - 4) {
                    setIndexFirstImageRender(indexFirstImageRender + 1);
                    setImagesRender(
                      images.slice(
                        indexFirstImageRender + 1,
                        indexFirstImageRender + 5
                      )
                    );
                  }
                }
              }}
            >
              {imagesRender.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={name}
                  onMouseEnter={() => setMainImage(image)}
                  preview={false}
                  className={image === mainImage ? "active" : ""}
                />
              ))}
              <div
                className="button-swiper left"
                style={{
                  display: indexFirstImageRender === 0 ? "none" : "flex",
                }}
                onClick={() => {
                  if (indexFirstImageRender > 0) {
                    setIndexFirstImageRender(indexFirstImageRender - 1);
                    setImagesRender(
                      images.slice(
                        indexFirstImageRender - 1,
                        indexFirstImageRender + 3
                      )
                    );
                  }
                }}
              >
                <LeftOutlined />
              </div>
              <div
                className="button-swiper right"
                style={{
                  display:
                    indexFirstImageRender === images.length - 4 ||
                    images.length < 4
                      ? "none"
                      : "flex",
                }}
                onClick={() => {
                  if (indexFirstImageRender < images.length - 4) {
                    setIndexFirstImageRender(indexFirstImageRender + 1);
                    setImagesRender(
                      images.slice(
                        indexFirstImageRender + 1,
                        indexFirstImageRender + 5
                      )
                    );
                  }
                }}
              >
                <RightOutlined />
              </div>
            </div>

            <Modal
              open={isShowImageReview}
              centered
              footer={null}
              width={1000}
              closeIcon={<CloseCircleOutlined style={{ fontSize: 25 }} />}
              onCancel={() => setIsShowImageReview(false)}
            >
              <Row gutter={10}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Image
                    src={mainImage}
                    alt={name}
                    preview={false}
                    height={500}
                    width={"100%"}
                    style={{ objectFit: "scale-down" }}
                    onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
                    onTouchEnd={(e) => {
                      if (e.changedTouches[0].clientX - touchStart > 50) {
                        const index = images.findIndex(
                          (image) => image === mainImage
                        );
                        if (index > 0) {
                          setMainImage(images[index - 1]);
                        }
                      } else if (
                        e.changedTouches[0].clientX - touchStart <
                        -50
                      ) {
                        const index = images.findIndex(
                          (image) => image === mainImage
                        );
                        if (index < images.length - 1) {
                          setMainImage(images[index + 1]);
                        }
                      }
                    }}
                  />
                  <LeftOutlined
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "-10px",
                      fontSize: "30px",
                      cursor: "pointer",
                      transform: "translateY(-50%)",
                      color: "#fff",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      padding: "5px",
                      zIndex: 1,
                      display:
                        images.findIndex((image) => image === mainImage) === 0
                          ? "none"
                          : "block",
                    }}
                    onClick={() => {
                      const index = images.findIndex(
                        (image) => image === mainImage
                      );
                      if (index > 0) {
                        setMainImage(images[index - 1]);
                      }
                    }}
                  />
                  <RightOutlined
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "-10px",
                      fontSize: "30px",
                      cursor: "pointer",
                      transform: "translateY(-50%)",
                      color: "#fff",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      padding: "5px",
                      zIndex: 1,
                      display:
                        images.findIndex((image) => image === mainImage) ===
                        images.length - 1
                          ? "none"
                          : "block",
                    }}
                    onClick={() => {
                      const index = images.findIndex(
                        (image) => image === mainImage
                      );
                      if (index < images.length - 1) {
                        setMainImage(images[index + 1]);
                      }
                    }}
                  />
                </Col>
                <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                  <Space size={10} wrap className="image-review__list">
                    {images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={name}
                        onClick={() => setMainImage(image)}
                        preview={false}
                        width={100}
                        height={100}
                        style={{ cursor: "pointer" }}
                        className={image === mainImage ? "active" : ""}
                      />
                    ))}
                  </Space>
                </Col>
              </Row>
            </Modal>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="Content__info">
            <h1 className="Content__info__name">{name}</h1>
            <div className="Content__info__rate">
              <span className="Content__info__rate__number">{rate}</span>
              <Rate allowHalf disabled value={rate} />
              <span className="Content__info__rate__sold">({sold} Sold)</span>
            </div>
            <div className="Content__info__price">
              {sale !== 0 && (
                <div className="Content__info__price__old">${price}</div>
              )}
              <div className="Content__info__price__current">
                {formatPrice(price * (1 - sale))}
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
              <button
                className="Content__info__btn__add"
                onClick={() => handleAddToCart()}
              >
                <ShoppingCartOutlined /> Add to cart
              </button>
              <button
                className="Content__info__btn__buy"
                onClick={() => handleBuyNow()}
              >
                Buy now
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <div className="Content__description">
        <h2 className="Content__description__title">Description</h2>
        <p className="Content__description__content">{description}</p>
      </div>
      <div className="Content__reviews">
        <h2 className="Content__reviews__title">Reviews</h2>
        <div className="Content__reviews__content">
          {reviews.length === 0 ? (
            <p>There are no reviews yet.</p>
          ) : (
            <div className="Content__reviews__list">
              {reviews.map((review, index) => (
                <Review
                  key={index}
                  avt={review.avatar}
                  name={review.name}
                  rate={review.rate}
                  content={review.content}
                  images={review.images}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  id: PropTypes.number,
  images: PropTypes.array,
  name: PropTypes.string,
  rate: PropTypes.number,
  sale: PropTypes.number,
  sold: PropTypes.number,
  price: PropTypes.number,
  description: PropTypes.string,
  reviews: PropTypes.array,
};

Content.defaultProps = {
  id: 0,
  images: [],
  name: "",
  rate: 0,
  sale: 0,
  sold: 0,
  price: 0,
  description: "",
  reviews: [],
};

export default Content;
