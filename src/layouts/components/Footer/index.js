import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import Logo from "../../../assets/images/bigLogo.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Row>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} className="footer__col">
          <h3>About us</h3>
          <p>
            We are as colorful as your imagination, Art Philosophy, Inc.® is all
            about color and art. Our philosophy is simple, create quality
            products for the everyday artist. Our extensive line of watercolor
            and art products can be found globally and includes our widely
            popular Watercolor Confections® sets, Concentrated Watercolors,
            Metallic Accents Palettes and more. Discover how quality and art can
            come together to create a truly one of a kind experience to make
            your everyday art beautiful.
          </p>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6} className="footer__col">
          <h3>Shop menu</h3>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Products</Link>
            </li>
            <li>
              <Link>Kits</Link>
            </li>
            <li>
              <Link>Gallery</Link>
            </li>
          </ul>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6} className="footer__col">
          <h3>Help</h3>
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Shipping</Link>
            </li>
            <li>
              <Link>Return</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
          </ul>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6} className="footer__col">
          <h3>Follow us</h3>
          <ul className="footer__col__social">
            <li>
              <Link>
                <FacebookFilled />
              </Link>
            </li>
            <li>
              <Link>
                <InstagramOutlined />
              </Link>
            </li>
            <li>
              <Link>
                <TwitterOutlined />
              </Link>
            </li>
            <li>
              <Link>
                <YoutubeFilled />
              </Link>
            </li>
          </ul>
          <Link to="/">
            <img src={Logo} alt="logo" width="100px" />
          </Link>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
