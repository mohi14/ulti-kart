import React, { useState } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Form, Label, Input, Col } from "reactstrap";
import { useRouter } from "next/router";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    const userData = {
      email,
      password,
    };

    fetch("http://localhost:5055/api/admin/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("ultiKartToken", result.token);
          router.push("/");
        } else if (result.message) {
          setError("This Email already Added!");
        }
      });
  };
  return (
    <CommonLayout parent="home" title="login">
      <section className="login-page section-b-space">
        <Container>
          <Row>
            <Col lg="6">
              <h3>Login</h3>
              <div className="theme-card">
                <Form className="theme-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <Label className="form-label" for="email">
                      Email
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required=""
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <Label className="form-label" for="review">
                      Password
                    </Label>
                    <Input
                      type="password"
                      className="form-control"
                      id="review"
                      placeholder="Enter your password"
                      required=""
                      name="password"
                    />
                  </div>
                  <p>{error}</p>
                  <button className="btn btn-solid" type="submit">
                    {" "}
                    Login
                  </button>
                </Form>
              </div>
            </Col>
            <Col lg="6" className="right-login">
              <h3>New Customer</h3>
              <div className="theme-card authentication-right">
                <h6 className="title-font">Create A Account</h6>
                <p>
                  Sign up for a free account at our store. Registration is quick
                  and easy. It allows you to be able to order from our shop. To
                  start shopping click register.
                </p>
                <a href="#" className="btn btn-solid">
                  Create an Account
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Login;
