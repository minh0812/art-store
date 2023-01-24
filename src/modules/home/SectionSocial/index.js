import { Space, Tooltip } from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import React from "react";
import "./SectionSocial.scss";
const SectionSocial = () => {
  return (
    <section className="SectionSocial">
      <h1>Contact</h1>
      <hr />
      <Space className="SectionSocial__GroupIcon">
        <Tooltip title="Facebook" color="#1877f2">
          <FacebookFilled className="icon facebook" />
        </Tooltip>
        <Tooltip title="Instagram" color="#e4405f">
          <InstagramOutlined className="icon instagram" />
        </Tooltip>
        <Tooltip title="Twitter" color="#1da1f2">
          <TwitterOutlined className="icon twitter" />
        </Tooltip>
        <Tooltip title="Youtube" color="#ff0000">
          <YoutubeFilled className="icon youtube" />
        </Tooltip>
      </Space>
    </section>
  );
};

export default SectionSocial;
