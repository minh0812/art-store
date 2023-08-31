import { Button, Col, Form, Input, Radio, Row, message } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { formatPrice } from "../../../utils";
import { AppContext } from "../../../context";
import { useNavigate } from "react-router-dom";
import PayPal from "../../../components/PayPal";

const LeftSide = () => {
  const navigate = useNavigate();
  const { carts, setCarts } = useContext(AppContext);
  const [paymentMethod, setPaymentMethod] = useState("cod");
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
    // round the integral to 2 digits
    setTotal(Math.round(newTotal * 100) / 100);
  }, [carts]);

  return (
    <Col xs={24} sm={24} md={12} xl={12} style={{ background: "#f9f9f9" }}>
      <Form
        name="checkout"
        style={{ width: "90%", margin: "10px auto" }}
        onFinish={handleCheckout}
      >
        <h2 style={{ textTransform: "uppercase" }}>Billing Information</h2>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item
              name="fullName"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Full name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item
              name="phone"
              rules={[{ required: true, message: "Please input your phone!" }]}
            >
              <Input placeholder="Phone" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item
              name="city"
              rules={[{ required: true, message: "Please input your city!" }]}
            >
              <Input placeholder="City" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input placeholder="Address" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} xl={12}>
            <Form.Item
              name="district"
              rules={[
                { required: true, message: "Please input your district!" },
              ]}
            >
              <Input placeholder="District" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name="note">
          <Input.TextArea placeholder="Order Note" />
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ textTransform: "uppercase" }}>Payment Method</h2>
          <h2>
            Total:{" "}
            <span style={{ color: "#eb4b16" }}>{formatPrice(total)}</span>
          </h2>
        </div>
        <Form.Item
          name="paymentMethod"
          rules={[{ required: true, message: "Please select payment method" }]}
        >
          <Radio.Group onChange={(e) => setPaymentMethod(e.target.value)}>
            <Radio value="cod">COD</Radio>
            <Radio value="credit-card">Credit Card</Radio>
            <Radio value="paypal">Paypal</Radio>
          </Radio.Group>
        </Form.Item>
        {paymentMethod === "credit-card" && (
          <div>
            <h2 style={{ textTransform: "uppercase" }}>Credit Card</h2>
            <Form.Item
              name="nameOfCard"
              rules={[
                { required: true, message: "Please input name of card!" },
              ]}
            >
              <Input placeholder="Name Of Card" />
            </Form.Item>
            <Form.Item
              name="cardNumber"
              rules={[{ required: true, message: "Please input card number!" }]}
            >
              <Input placeholder="Card Number" />
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="expirationDate"
                  rules={[
                    {
                      required: true,
                      message: "Please input expiration date!",
                    },
                  ]}
                >
                  <Input placeholder="Expiration Date" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="cvv"
                  rules={[{ required: true, message: "Please input CVV!" }]}
                >
                  <Input placeholder="CVV" />
                </Form.Item>
              </Col>
            </Row>
          </div>
        )}
        {paymentMethod === "paypal" && (
          <PayPal total={total} handleCheckout={handleCheckout} />
        )}
        <Form.Item hidden={paymentMethod === "paypal"}>
          <Button
            style={{ float: "right", marginTop: "10px" }}
            type="primary"
            htmlType="submit"
          >
            Place Order
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default LeftSide;
