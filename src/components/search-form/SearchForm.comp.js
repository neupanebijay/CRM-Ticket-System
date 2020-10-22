import React from 'react'
import PropTypes from 'prop-types'
import {Form, Row, Col} from 'react-bootstrap'

export const SearchForm = ({handleOnChange, str}) => {
  console.log(str)
  return (
    <Form>
      <Form.Group as = {Row}>

        <Form.Label column sm= "2">
          Search: {" "}
        </Form.Label>
        <Col sm="6">
          <Form.Control
           name="searchStr" 
           onChange ={handleOnChange}
           value = {str}
           placeholder="Search Tickets"/>
        
        </Col>
            
        
      </Form.Group>

    </Form>
  )
}


SearchForm.propTypes = {
  handleOnChange : PropTypes.func.isRequired,
  str : PropTypes.string.isRequired

}