import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { BreadcrumbPage } from '../../components/breadcrumb/Breadcrumb.comp';
import tickets from '../../assets/data/dummy-tickets.json'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../components/reply-ticket/UpdateTicket.comp';
import { useParams } from 'react-router-dom';

// const ticket = tickets[0];
export const Ticket = () => {

  const { tId } = useParams();

  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if(tickets[i].id == tId){
        // this individual ticket from tickets[i] will be passed to ticket of useState.
        setTicket(tickets[i]);
        continue;
      }
      
      
    }
  }, [message, tId])

  const handleOnChange = e =>{
    setMessage(e.target.value);
  }

  const handleOnSubmit = () => {
    alert ('Your form is submitted. Thank you! for your time.');
  }


  return (
    <Container>
      <Row>
        <Col>
        <BreadcrumbPage page = "Ticket"/>
        </Col>
      </Row>
      <Row>
      
        <Col className="font-weight-bold text-secondary">
          
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="status">Status: {ticket.status}</div>
          <div className="date">Added at:{ticket.addedAt}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-danger">Close Ticket</Button>
        </Col>
      </Row>
      <Row>
        <Col>
        {ticket.history && <MessageHistory msg={ticket.history}/>}
        
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <UpdateTicket 
            msg = {message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        
        </Col>
      </Row>
      
    </Container>
  )
}
