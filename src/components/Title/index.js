import React from "react";
import PropTypes from "prop-types";
import "./title.scss";
import { Link } from "react-router-dom";

const Title = ({ title, items }) => {
  return (
    <div className="title">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li className="title__item" key={index}>
            <Link to={item.link} className="title__item__content">
              {item.content}
            </Link>
            {index !== items.length - 1 && (
              <div className="title__item__split">|</div>
            )}
          </li>
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
