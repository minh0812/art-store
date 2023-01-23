import React from "react";
import "./SectionWaterSolubleOilPastels.scss";
import ButtonCustom from "../../../components/ButtonCustom";
import { Col, Row } from "antd";

const SectionWaterSolubleOilPastels = () => {
  return (
    <section className="SectionWaterSolubleOilPastels">
      <Row>
        <Col span={12} className="SectionWaterSolubleOilPastels__left">
          <div className="SectionWaterSolubleOilPastels__left__content">
            <h1>WATER SOLUBLE OIL PASTELS</h1>
            <div className="SectionWatercolorConfections__right__separator"></div>
            <p>
              A perfect duo, our beautiful oil pastels with the versatility of
              watercolor! Use our oil pastels traditionally or add water to
              create a variety of blending techniques and gradients. Includes a
              variety of colors for endless blending and ease of use.
            </p>
            <ButtonCustom>Learn More</ButtonCustom>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default SectionWaterSolubleOilPastels;
