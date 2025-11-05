import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../api/user";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await LoginUser(values);
      console.log(response);
      if (response?.success) {
        message.success(response?.message);
        setTimeout(() => {
          localStorage.setItem("tokenForBMS", response?.data);
          navigate("/");
        }, 1000);
      } else {
        message.warning(response?.message);
      }
    } catch (error) {
      message.error(error);
    }
  };
  return (
    <header className="App-header">
      <main className="mw-500 text-center px-3">
        <section>
          <h1>Login to BookMyShow</h1>
        </section>
        <section>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              htmlFor="email"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input type="email" placeholder="Enter your Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              htmlFor="password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input type="password" placeholder="Enter your Password" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                block
                htmlType="submit"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </section>
        <section>
          <p>
            New User ? <Link to="/register">Register Here</Link>
          </p>
          <p>
            Forgot Password ? <Link to="/forget">Click Here</Link>
          </p>
        </section>
      </main>
    </header>
  );
};

export default Login;
