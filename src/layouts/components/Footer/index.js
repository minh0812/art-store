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
        <Col span={6} className="footer__col">
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            ratione nemo fugiat atque, similique harum est quasi eaque iure
            omnis aperiam! Ratione minima laboriosam nesciunt vel magni aperiam
            laudantium, porro atque? Perspiciatis architecto a reiciendis
            possimus fugiat optio et velit eaque impedit excepturi veritatis
            expedita numquam ducimus non est quos consequuntur magnam aliquid,
            ad, doloribus rerum nihil odit. Eius ducimus optio asperiores
            quidem.
          </p>
        </Col>

        <Col span={6} className="footer__col">
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

        <Col span={6} className="footer__col">
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

        <Col span={6} className="footer__col">
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
