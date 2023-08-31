import { Col, Row } from "antd";
import React from "react";
import "./SectionOilPastels.scss";
import ButtonCustom from "../../../components/ButtonCustom";
import ScrollAnimation from "react-animate-on-scroll";

const SectionOilPastels = () => {
  return (
    <section className="SectionOilPastels">
      <Row>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="SectionOilPastels__left"
        ></Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="SectionOilPastels__right"
        >
          <div className="SectionOilPastels__right__content">
            <h1>Oil Pastels</h1>
            <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
              <div className="SectionWatercolorConfections__right__separator"></div>
            </ScrollAnimation>
            <p>
              Blend, color and layer, our Art Philosophy Oil Pastels offer a
              higher grade of color and pigmentation for a truly beautiful
              finish every time. Mix and blend our pastels for a customized
              color palette. Includes a variety of colors for every artistic
              endeavor.
            </p>
            <ButtonCustom to={"/products/category/oil-pastels"}>
              Learn More
            </ButtonCustom>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default SectionOilPastels;
