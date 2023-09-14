import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import Logo from "../../../assets/images/bigLogo.png";
import "./Header.scss";
import { Avatar, Badge, Dropdown, Input, Modal, Space } from "antd";
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
  const { carts, isLogin, setIsLogin, setCarts, removeCookie } =
    useContext(AppContext);
  const [cartCount, setCartCount] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    navigate(`/search/${keyword}`);
    setIsShowModal(false);
  };

  const itemsMenu = [
    {
      key: "1",
      label: "Home",
      onClick: () => {
        navigate("/");
      },
    },
    {
      key: "2",
      label: "Kits",
      onClick: () => {
        navigate("/kits");
      },
    },
    {
      key: "3",
      label: "Products",
      onClick: () => {
        navigate("/products");
      },
    },
    {
      key: "4",
      label: "About",
      onClick: () => {
        navigate("/about");
      },
    },
    {
      key: "5",
      label: "Gallery",
      onClick: () => {
        navigate("/gallery");
      },
    },
  ];

  const itemsLogout = [
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
    <header
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
        <li className="header__menu__item">
          <SearchOutlined onClick={() => setIsShowModal(!isShowModal)} />
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
            <Dropdown menu={{ items: itemsLogout }}>
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
      <Space
        className="header__menu__responsive"
        align="center"
        size={25}
        style={{ marginLeft: "auto" }}
      >
        <SearchOutlined onClick={() => setIsShowModal(!isShowModal)} />
        <Link to="/cart">
          <Badge count={cartCount} offset={[5, 0]}>
            <ShoppingCartOutlined style={{ fontSize: "18px" }} />
          </Badge>
        </Link>
        {isLogin ? (
          <Dropdown
            menu={{
              items: itemsLogout,
            }}
          >
            <Avatar
              src={
                "https://i.pinimg.com/564x/54/db/23/54db23b3ec2715a44be5d7cc2135df69.jpg"
              }
            />
          </Dropdown>
        ) : (
          <Link to="/login">
            <UserOutlined />
          </Link>
        )}

        <Dropdown menu={{ items: itemsMenu }}>
          <MenuOutlined />
        </Dropdown>
      </Space>
      
      <Modal
        title={"Search Product"}
        open={isShowModal}
        closeIcon={null}
        onCancel={() => setIsShowModal(false)}
        onOk={() => handleSearch()}
        okText={"Search"}
      >
        <Input
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search..."
          suffix={<SearchOutlined />}
          onPressEnter={() => handleSearch()}
        />
      </Modal>
    </header>
  );
};

export default Header;
