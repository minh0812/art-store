import { Col, Row } from "antd";
import React from "react";
import ButtonCustom from "../../../components/ButtonCustom";
import "./SectionConcentratedWatercolors.scss";
const SectionConcentratedWatercolors = () => {
  return (
    <section className="SectionConcentratedWatercolors">
      <Row>
        <Col span={12} className="SectionConcentratedWatercolors__content">
          <div>
            <h1>CONCENTRATED WATERCOLORS</h1>
            <div className="SectionWatercolorConfections__right__separator"></div>
            <p>
              Fluid, rich and highly pigmented. Create effortless shading,
              gradients and intensity with our Concentrated Watercolors. Fluid
              in nature for quick and easy blending, coloring and more. Our
              Concentrated Watercolors are the perfect companion to your
              artistic arsenal. Available in a variety of colors, Concentrated
              Watercolors offer the ease of traditional watercolors with the
              swiftness of a fluid.
            </p>
            <ButtonCustom>Learn More</ButtonCustom>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default SectionConcentratedWatercolors;
