import React from "react";
import PropTypes from "prop-types";
import "./Review.scss";
import { Avatar, Rate, Image } from "antd";

const Review = ({ avt, name, rate, content, images }) => {
  return (
    <div className="Review">
      <div className="Review__header">
        <Avatar src={avt} alt="" size={40} />
        <div className="Review__header__info">
          <p className="Review__header__info__name">{name}</p>
          <Rate disabled defaultValue={rate} />
        </div>
      </div>
      <div className="Review__content">
        <p className="Review__content__text">{content}</p>
        <div className="Review__content__images">
          <Image.PreviewGroup>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="review"
                width={100}
                height={100}
              />
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  avt: PropTypes.string,
  name: PropTypes.string,
  rate: PropTypes.number,
  content: PropTypes.string,
  images: PropTypes.array,
};

Review.defaultProps = {
  avt: "",
  name: "",
  rate: 0,
  content: "",
  images: [],
};

export default Review;
