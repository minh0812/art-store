import { Col, Row } from "antd";
import React from "react";
import "./SectionOilPastels.scss";
import ButtonCustom from "../../../components/ButtonCustom";

const SectionOilPastels = () => {
  return (
    <section className="SectionOilPastels">
      <Row>
        <Col span={12}></Col>
        <Col span={12} className="SectionOilPastels__left">
          <div className="SectionOilPastels__left__content">
            <h1>Oil Pastels</h1>
            <div className="SectionWatercolorConfections__right__separator"></div>
            <p>
              Blend, color and layer, our Art Philosophy Oil Pastels offer a
              higher grade of color and pigmentation for a truly beautiful
              finish every time. Mix and blend our pastels for a customized
              color palette. Includes a variety of colors for every artistic
              endeavor.
            </p>
            <ButtonCustom>Learn More</ButtonCustom>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default SectionOilPastels;
