import React from "react";
import PropTypes from "prop-types";
import "./title.scss";

const Title = ({ title, items }) => {
  return (
    <div className="title">
      <h4>{title}</h4>
      <ul>
        {/* <li className="title__item">Home</li>
        <li>|</li>
        <li className="title__item">Products</li>
        <li>|</li>
        <li className="title__item">Product Details</li> */}
        {items.map((item, index) => (
          <>
            <li className="title__item">{item}</li>
            {index !== items.length - 1 && <li>|</li>}
          </>
        ))}
      </ul>
    </div>
  );
};
Title.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

Title.defaultProps = {
  title: "",
  items: [],
};
export default Title;
