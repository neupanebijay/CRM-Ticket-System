import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = ({
  handleOnChange,
  handleOnSubmit,
  formSwitch,
  email,
  pass,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />
          {/* createing a form */}
          <form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="abc@email.com"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                minLength="8"
                value={pass}
                onChange={handleOnChange}
                placeholder="*******"
                required
              />
            </Form.Group>
            <Button variant="info" type="Submit">
              Login
            </Button>
          </form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitch("reset")}>
            Forget Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitch: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};
