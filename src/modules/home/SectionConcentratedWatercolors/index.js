import { Col, Row } from "antd";
import React from "react";
import ButtonCustom from "../../../components/ButtonCustom";
import "./SectionConcentratedWatercolors.scss";
import ScrollAnimation from "react-animate-on-scroll";
const SectionConcentratedWatercolors = () => {
  return (
    <section className="SectionConcentratedWatercolors">
      <Row>
        <Col span={12} className="SectionConcentratedWatercolors__content">
          <div>
            <h1>CONCENTRATED WATERCOLORS</h1>
            <ScrollAnimation animateIn="animate__slideInLeft">
              <div className="SectionWatercolorConfections__right__separator"></div>
            </ScrollAnimation>
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
