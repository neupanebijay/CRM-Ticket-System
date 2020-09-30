import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login</h1>
          <hr />

          <form>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="abc@email.com"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="Password"
                name="Password"
                placeholder="*******"
                required
              />
            </Form.Group>
            <Button variant="info" type="Submit">
              Submit
            </Button>
          </form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#">Forget Password?</a>
        </Col>
      </Row>
    </Container>
  );
};
