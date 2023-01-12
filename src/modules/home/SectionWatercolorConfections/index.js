import { Col, Row } from "antd";
import React from "react";
import ButtonCustom from "../../../components/ButtonCustom";
import "./SectionWatercolorConfections.scss";
const SectionWatercolorConfections = () => {
  return (
    <section className="SectionWatercolorConfections">
      <Row>
        <Col span={12} className="SectionWatercolorConfections__left"></Col>
        <Col span={12} className="SectionWatercolorConfections__right">
          <h1>Watercolor Confections®</h1>
          <span></span>
          <p>
            Ignite your watercolor adventures with our Watercolor Confections®
            Sets, featuring individually curated pans with a variety of color
            stories and pigments. From The Basics to beautifully rich colors in
            the Shimmering Lights Set, you will find a set that truly matches
            your artistic taste. Each palette features highly pigmented pans in
            a metal tin perfect for traveling and painting on the go.
          </p>
          <ButtonCustom to="/">
            Learn More
          </ButtonCustom>
        </Col>
      </Row>
    </section>
  );
};

export default SectionWatercolorConfections;
