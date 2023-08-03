import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Logo from "../../../assets/images/bigLogo.png";
import "./Header.scss";

const Header = () => {
  const NAVBAR = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Kits",
      link: "/kits",
    },
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
    {
      title: <SearchOutlined />,
      // link: "/search",
    },
    {
      title: <ShoppingCartOutlined />,
      link: "/cart",
    },
    {
      title: <UserOutlined />,
      link: "/login",
    },
  ];

  const location = useLocation();

  return (
    <header>
      <div className="container">
        <div className="header" style={{position: location.pathname !== "/" && "relative"}}>
          <Link to="/">
            <img src={Logo} alt="logo" className="header__logo" />
          </Link>
          <ul className="header__menu">
            {NAVBAR.map((item, index) => {
              return (
                <li
                  key={index}
                  className={
                    "header__menu__item" +
                    (location.pathname === item.link ? " activate" : "")
                  }
                >
                  <Link to={item.link}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
