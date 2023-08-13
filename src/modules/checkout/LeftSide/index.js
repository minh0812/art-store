import { Button, Col, Form, Input, Radio, Row, message } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { formatPrice } from "../../../utils";
import { AppContext } from "../../../context";
import { useNavigate } from "react-router-dom";

const LeftSide = () => {
  const navigate = useNavigate();
  const { carts, setCarts } = useContext(AppContext);
  const [total, setTotal] = useState(0);

  const handleCheckout = () => {
    message.success("Checkout successfully");
    setCarts(carts.filter((cart) => !cart.check));
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  useEffect(() => {
    if (!carts) return;
    const newTotal = carts.reduce(
      (total, cart) =>
        cart.check
          ? total + cart.price * cart.quantity * (1 - cart.sale)
          : total,
      0
    );
    setTotal(newTotal);
  }, [carts]);

  return (
    <Col span={12} style={{ background: "#f9f9f9" }}>
      <Form
        name="checkout"
        style={{ width: "90%", margin: "10px auto" }}
        onFinish={handleCheckout}
      >
        <h2 style={{ textTransform: "uppercase" }}>Billing Information</h2>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="fullName"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Full name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: "Please input your phone!" }]}
            >
              <Input placeholder="Phone" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="city"
              rules={[{ required: true, message: "Please input your city!" }]}
            >
              <Input placeholder="City" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item name="note">
          <Input.TextArea placeholder="Order Note" />
        </Form.Item>

        <h2 style={{ textTransform: "uppercase" }}>Payment Method</h2>
        <Form.Item
          name="paymentMethod"
          rules={[{ required: true, message: "Please select payment method" }]}
        >
          <Radio.Group>
            <Radio value="cod">COD</Radio>
            <Radio value="bank" disabled>
              Bank Transfer
            </Radio>
            <Radio value="paypal" disabled>
              Paypal
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <h2>
              Total:{" "}
              <span style={{ color: "#eb4b16" }}>{formatPrice(total)}</span>
            </h2>
            <Button style={{ marginLeft: 10 }} type="primary" htmlType="submit">
              Place Order
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default LeftSide;
