import React from "react";
import PropTypes from "prop-types";
import "./title.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Title = ({ title, items }) => {
  const [itemsRender, setItemsRender] = useState([]);

  useEffect(() => {
    setItemsRender(items);
  }, [items]);

  return (
    <div className="title">
      <h4>{title}</h4>
      <ul className="title__menu">
        {itemsRender.map((item, index) => (
          <li className="title__item" key={index}>
            <Link to={item?.link} className="title__item__content">
              {item?.content?.length <= 10
                ? item?.content
                : item?.content?.slice(0, 26) + "..."}
            </Link>
            {index !== itemsRender?.length - 1 && (
              <div className="title__item__split">|</div>
            )}
          </li>
        ))}
      </ul>

      <ul className="title__responsive">
        {itemsRender.map((item, index) => (
          <li className="title__item" key={index}>
            {index < 2 && (
              <Link to={item?.link} className="title__item__content">
                {item?.content?.length <= 10
                  ? item?.content
                  : item?.content?.slice(0, 26) + "..."}
              </Link>
            )}
            {index < 1 && <div className="title__item__split">|</div>}
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
  items: [{ content: "home", link: "/" }],
};
export default Title;
