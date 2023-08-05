import { Col, Form, Row, Button, Checkbox, Input } from "antd";
import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="Login">
      <Row>
        <Col span={12} className="Login__left">
          <img
            src="https://www.artphilosophy.com/wp-content/uploads/2019/12/art-tubes-garima-peonies.jpg"
            alt="login"
          />
        </Col>
        <Col span={12} className="Login__right">
          <div>
            <h1>Sign in</h1>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input defaultValue={"Tony"}/>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password defaultValue={"12345678"} />
              </Form.Item>

              <div className="Login__right__register">
                <span>Don't have an account?</span>
                <Link>Register</Link>
              </div>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Sign in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
