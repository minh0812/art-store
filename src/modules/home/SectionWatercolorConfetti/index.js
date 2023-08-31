import { Col, Row } from "antd";
import React from "react";
import ButtonCustom from "../../../components/ButtonCustom";
import "./SectionWatercolorConfetti.scss";
import ScrollAnimation from "react-animate-on-scroll";

const SectionWatercolorConfetti = () => {
  return (
    <section className="SectionWatercolorConfetti">
      <Row className="SectionWatercolorConfetti__content">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="SectionWatercolorConfetti__content__left"
        >
          <h1>Watercolor Confetti</h1>
          <ScrollAnimation animateIn="animate__slideInLeft" animateOnce={true}>
            <div className="SectionWatercolorConfections__right__separator"></div>
          </ScrollAnimation>
          <p>
            An introductory set perfect for travel, sketching, basic
            watercoloring and more. This set provides all the basic watercolors
            you need in one set, offering quality and brilliance you love from
            Art Philosophy. Included is a sturdy metal tin and mixing foldout
            well for easy color mixing.
          </p>
          <ButtonCustom to={"/products/category/watercolor-confetti"}>
            Learn More
          </ButtonCustom>
        </Col>
      </Row>
    </section>
  );
};

export default SectionWatercolorConfetti;
