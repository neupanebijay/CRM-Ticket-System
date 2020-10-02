import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({
  handleOnChange,
  handleOnResetSubmit,
  formSwitch,
  email,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          {/* createing a form */}
          <form autoComplete="off" onSubmit={handleOnResetSubmit}>
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

            <Button variant="info" type="Submit">
              Reset Password
            </Button>
          </form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitch("login")}>
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitch: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  // pass: PropTypes.string.isRequired,
};
