import React from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import "./AddTicketForm.style.css";

// import { Header } from "../../layouts/partials/Header.comp";

export const AddTicketForm = ({
  handleOnChange,
  handleOnSubmit,
  formDataError,
  formData,
}) => {
  // console.log(formData);
  return (
    <Jumbotron className="add-new-ticket mt-3">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={formData.subject}
              // minLength="10"
              // maxLength="50"
              onChange={handleOnChange}
              placeholder="Enter subject"
              required
            />
            <Form.Text className="text-danger">
              {formDataError.subject && "** Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>

        {/* the rows and columns are to keep subject and its value as well as issue date and its value in the same row */}

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issues Found Date
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            name="details"
            // minLength="10"
            value={formData.details}
            onChange={handleOnChange}
            placeholder="Write the details of your problems"
            required
          />
          <Form.Text className="text-danger">
            {formDataError.details && "**Description is required"}
          </Form.Text>
        </Form.Group>
        <Button variant="info" type="Submit" block>
          Login
        </Button>
      </form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired,
};
