import React, { useState } from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Input, Container, Row, Form, Label, Col } from "reactstrap";
import { useRouter } from "next/router";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log("mname", name, email, password);
    const userData = {
      name: firstName + lastName,
      email,
      password,
    };

    fetch("http://localhost:5055/api/admin/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.token) {
          localStorage.setItem("ultiKartToken", result.token);
          setError("");
          router.push("/");
        } else if (result.message) {
          setError("This Email already Added!");
        }
      });
  };
  return (
    <CommonLayout parent="home" title="register">
      <section className="register-page section-b-space">
        <Container>
          <Row>
            <Col lg="12">
              <h3>create account</h3>
              <div className="theme-card">
                <Form className="theme-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col md="6">
                      <Label className="form-label" for="email">
                        First Name
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="fname"
                        placeholder="First Name"
                        required=""
                        name="firstName"
                      />
                    </Col>
                    <Col md="6">
                      <Label className="form-label" for="review">
                        Last Name
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        id="lname"
                        placeholder="Last Name"
                        required=""
                        name="lastName"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Label className="form-label" for="email">
                        email
                      </Label>
                      <Input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required=""
                        name="email"
                      />
                      <p>{error}</p>
                    </Col>
                    <Col md="6">
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
                    </Col>
                    <Col md="12">
                      <button className="btn btn-solid w-auto" type="submit">
                        {" "}
                        create Account
                      </button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Register;
