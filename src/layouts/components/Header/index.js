import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import Logo from "../../../assets/images/bigLogo.png";
import "./Header.scss";
import { Avatar, Badge, Dropdown, Input } from "antd";
import { useContext } from "react";
import { AppContext } from "../../../context";
import { useEffect } from "react";

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
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const { carts, isLogin, setIsLogin, setCarts, removeCookie } =
    useContext(AppContext);
  const [cartCount, setCartCount] = useState(0);

  const items = [
    {
      key: "1",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: () => {
        removeCookie("isLogin");
        setIsLogin(false);
        setCarts([]);
        navigate("/login");
      },
    },
  ];
  useEffect(() => {
    let count = 0;
    carts.forEach((cart) => {
      count += cart.quantity;
    });
    setCartCount(count);
  }, [carts]);

  return (
    <header>
      <div className="container">
        <div
          className="header"
          style={{ position: location.pathname !== "/" && "relative" }}
        >
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
            <li>
              <div style={{ display: "flex", marginLeft: "22px" }}>
                <Input
                  placeholder="Search"
                  style={{
                    display: showSearch ? "block" : "none",
                    marginRight: "8px",
                  }}
                  onPressEnter={(e) => {
                    navigate(`/products/search/${e.target.value}`);
                  }}
                />
                <SearchOutlined onClick={() => setShowSearch(!showSearch)} />
              </div>
            </li>
            {isLogin && (
              <li
                className={
                  "header__menu__item" +
                  (location.pathname === "/cart" ? " activate" : "")
                }
              >
                <Link to="/cart">
                  <Badge count={cartCount} offset={[5, 0]}>
                    <ShoppingCartOutlined style={{ fontSize: "18px" }} />
                  </Badge>
                </Link>
              </li>
            )}
            {isLogin ? (
              <li style={{ cursor: "pointer", marginLeft: "32px" }}>
                <Dropdown menu={{ items }}>
                  <Avatar
                    src={
                      "https://i.pinimg.com/564x/54/db/23/54db23b3ec2715a44be5d7cc2135df69.jpg"
                    }
                  />
                </Dropdown>
              </li>
            ) : (
              <li
                className={
                  "header__menu__item" +
                  (location.pathname === "/login" ? " activate" : "")
                }
              >
                <Link to="/login">
                  <UserOutlined />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
