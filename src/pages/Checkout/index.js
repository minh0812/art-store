import React from "react";
import LeftSide from "../../modules/checkout/LeftSide";
import RightSide from "../../modules/checkout/RightSide";
import { Row } from "antd";
import Title from "../../components/Title";

const CheckoutPage = () => {
  return (
    <>
      <Title
        title={"checkout"}
        items={[
          { content: "home", link: "/" },
          { content: "checkout", link: "/checkout" },
        ]}
      />
      <Row>
        <LeftSide />
        <RightSide />
      </Row>
    </>
  );
};

export default CheckoutPage;
