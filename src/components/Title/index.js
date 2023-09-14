import React from "react";
import PropTypes from "prop-types";
import "./title.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Title = ({ title, items }) => {
  const [itemsRender, setItemsRender] = useState([]);

  useEffect(() => {
    window.innerWidth >= 768 && setItemsRender(items);
    window.innerWidth < 768 && setItemsRender(items.slice(0, 2));
  }, [items]);

  return (
    <div className="title">
      <h4>{title}</h4>
      <ul>
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
