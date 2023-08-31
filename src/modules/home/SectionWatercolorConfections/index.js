import { Col, Row } from "antd";
import React from "react";
import ButtonCustom from "../../../components/ButtonCustom";
import "./SectionWatercolorConfections.scss";
import ScrollAnimation from "react-animate-on-scroll";
const SectionWatercolorConfections = () => {
  return (
    <section className="SectionWatercolorConfections">
      <Row>
        <Col
          xs={24}
          sm={24}
          md={12}
          xl={12}
          className="SectionWatercolorConfections__left"
        ></Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          xl={12}
          className="SectionWatercolorConfections__right"
        >
          <div className="SectionWatercolorConfections__right__content">
            <h1>Watercolor Confections®</h1>
            <ScrollAnimation animateIn="animate__slideInRight" animateOnce={true}>
              <div className="SectionWatercolorConfections__right__separator"></div>
            </ScrollAnimation>
            <p>
              Ignite your watercolor adventures with our Watercolor Confections®
              Sets, featuring individually curated pans with a variety of color
              stories and pigments. From The Basics to beautifully rich colors
              in the Shimmering Lights Set, you will find a set that truly
              matches your artistic taste. Each palette features highly
              pigmented pans in a metal tin perfect for traveling and painting
              on the go.
            </p>
            <ButtonCustom to="/products/category/watercolor-confections">
              Learn More
            </ButtonCustom>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default SectionWatercolorConfections;
