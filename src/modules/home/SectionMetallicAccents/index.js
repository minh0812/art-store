import { Col, Row } from "antd";
import React from "react";
import "./SectionMetallicAccents.scss";
import ButtonCustom from "../../../components/ButtonCustom";
const SectionMetallicAccents = () => {
  return (
    <section className="SectionMetallicAccents">
      <Row>
        <Col span={12} className="SectionMetallicAccents__left">
          <div className="SectionMetallicAccents__left__content">
            <h1>METALLIC ACCENTS</h1>
            <div className="SectionWatercolorConfections__right__separator"></div>
            <p>
              Discover Metallic Accents! A truly vibrant and reflective
              wate-activated pan set perfect for adding accents to your projects
              and watercolor pieces. Simply add water to activate! Works on
              light and dark surfaces and adds a reflective effect on most
              surfaces.
            </p>
            <ButtonCustom>Learn More</ButtonCustom>
          </div>
        </Col>
        <Col span={12}></Col>
      </Row>
    </section>
  );
};

export default SectionMetallicAccents;
