import { Col, Row } from "antd";
import React from "react";
import "./SectionMetallicAccents.scss";
import ButtonCustom from "../../../components/ButtonCustom";
import ScrollAnimation from "react-animate-on-scroll";
const SectionMetallicAccents = () => {
  return (
    <section className="SectionMetallicAccents">
      <Row>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="SectionMetallicAccents__left"
        >
          <div className="SectionMetallicAccents__left__content">
            <h1>METALLIC ACCENTS</h1>
            <ScrollAnimation animateIn="animate__slideInLeft">
              <div className="SectionWatercolorConfections__right__separator"></div>
            </ScrollAnimation>
            <p>
              Discover Metallic Accents! A truly vibrant and reflective
              wate-activated pan set perfect for adding accents to your projects
              and watercolor pieces. Simply add water to activate! Works on
              light and dark surfaces and adds a reflective effect on most
              surfaces.
            </p>
            <ButtonCustom to={"/products/category/metallic-accents"}>
              Learn More
            </ButtonCustom>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="SectionMetallicAccents__right"
        ></Col>
      </Row>
    </section>
  );
};

export default SectionMetallicAccents;
