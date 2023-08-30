import React from "react";
import "./SectionWaterSolubleOilPastels.scss";
import ButtonCustom from "../../../components/ButtonCustom";
import { Col, Row } from "antd";
import ScrollAnimation from "react-animate-on-scroll";

const SectionWaterSolubleOilPastels = () => {
  return (
    <section className="SectionWaterSolubleOilPastels">
      <Row>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="SectionWaterSolubleOilPastels__left"
        >
          <div className="SectionWaterSolubleOilPastels__left__content">
            <h1>WATER SOLUBLE OIL PASTELS</h1>
            <ScrollAnimation animateIn="animate__slideInLeft">
              <div className="SectionWatercolorConfections__right__separator"></div>
            </ScrollAnimation>
            <p>
              A perfect duo, our beautiful oil pastels with the versatility of
              watercolor! Use our oil pastels traditionally or add water to
              create a variety of blending techniques and gradients. Includes a
              variety of colors for endless blending and ease of use.
            </p>
            <ButtonCustom to={"/products/category/oil-pastels"}>
              Learn More
            </ButtonCustom>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="SectionWaterSolubleOilPastels__right"
        ></Col>
      </Row>
    </section>
  );
};

export default SectionWaterSolubleOilPastels;
