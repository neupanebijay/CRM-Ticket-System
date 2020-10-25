import React from 'react';
import PropTypes from 'prop-types';

import {Form, Button} from 'react-bootstrap';

export const UpdateTicket = ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group>
        <Form.Label>
          Reply:
        </Form.Label>
        <Form.Text>
          Please reply your message here or update your ticket:
        </Form.Text>
        <Form.Control 
        as="textarea"
        name="" 
        value={msg}
        onChange={handleOnChange}
        rows="5"/>
      </Form.Group>
      <div className="text-right  mt-auto">

         <Button variant="success" type="submit">Reply</Button>
      </div>
    </Form>
  )
}
UpdateTicket.propTypes ={
  handleOnChange : PropTypes.func.isRequired,
  handleOnSubmit : PropTypes.func.isRequired,
  msg : PropTypes.string.isRequired,
}