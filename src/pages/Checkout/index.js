import React from "react";
import LeftSide from "../../modules/checkout/LeftSide";
import RightSide from "../../modules/checkout/RightSide";
import { Row } from "antd";
import Title from "../../components/Title";

const CheckoutPage = () => {
  return (
    <>
      <Title title={"checkout"} items={["home", "checkout"]} />
      <Row>
        <LeftSide />
        <RightSide />
      </Row>
    </>
  );
};

export default CheckoutPage;
