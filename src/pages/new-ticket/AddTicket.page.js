import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { BreadcrumbPage } from "../../components/breadcrumb/Breadcrumb.comp";
import { shortText } from "../../assets/utility/validation";

const initialFormData = {
  subject: "",
  issueDate: "",
  details: "",
};

const initialFormDataErr = {
  subject: false,
  issueDate: false,
  details: false,
};

export const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormDataErr);

  useEffect(() => {}, [formData, formDataError]);

  // handle on change
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
      // name should be kept in square bracet else it converts it as a value
    });
  };

  //handle on submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const isSubjectValid = await shortText(formData.subject);
    const isDetailsValid = await shortText(formData.details);

    setFormDataError({
      ...initialFormDataErr,
      subject: !isSubjectValid,

      details: !isDetailsValid,
    });

    console.log(
      "Form- submit request is received. Thank you! for your time.",
      formData
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formDataError={formDataError}
            formData={formData}
            // this formData=[] is from useState
          />
        </Col>
      </Row>
    </Container>
  );
};
