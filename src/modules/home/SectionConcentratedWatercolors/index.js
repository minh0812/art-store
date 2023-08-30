import { Col, Row } from "antd";
import React from "react";
import ButtonCustom from "../../../components/ButtonCustom";
import "./SectionConcentratedWatercolors.scss";
import ScrollAnimation from "react-animate-on-scroll";
const SectionConcentratedWatercolors = () => {
  return (
    <section className="SectionConcentratedWatercolors">
      <Row className="SectionConcentratedWatercolors__content">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="SectionConcentratedWatercolors__content__left"
        >
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
            <ButtonCustom to={"/products/category/concentrated-watercolors"}>
              Learn More
            </ButtonCustom>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default SectionConcentratedWatercolors;
