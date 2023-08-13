import { Col, Form, Row, Button, Checkbox, Input, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../context";
const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { setCookie } = useContext(AppContext);
  const onFinish = (values) => {
    setIsLogin(true);
    setTimeout(() => {
      if (values.username === "Tony" && values.password === "123456") {
        setCookie("isLogin", "true", {
          path: "/",
          maxAge: values.remember ? 3600 * 24 * 7 : 10,
        });

        window.location.href = "/";
      } else {
        message.error("Username or password is incorrect !");
      }
      setIsLogin(false);
    }, 2000);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      username: "Tony",
      password: "123456",
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
              form={form}
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
                <Input placeholder="Username" prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  prefix={<LockOutlined />}
                />
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
                <Button type="primary" htmlType="submit" loading={isLogin}>
                  Login
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
