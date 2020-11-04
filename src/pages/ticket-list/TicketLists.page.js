import React, {useState, useEffect} from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap';
import { BreadcrumbPage } from '../../components/breadcrumb/Breadcrumb.comp';
import { SearchForm } from '../../components/search-form/SearchForm.comp';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import {Link} from 'react-router-dom';



export const TicketLists = () => {
  const [str, setStr] = useState('');
  const [dispTicket, setdispTicket] = useState(tickets);
  useEffect(() => {
    
  }, [str, dispTicket])



  const handleOnChange = e =>{
    const {value} = e.target;
    setStr(value);
    searchTicket(value);
  }

  // function to handle search ticket

  const searchTicket = sttr => {
    const displayTickets = tickets.filter((row) => 
      row.subject.toLowerCase().includes(sttr.toLowerCase())
      );
    
    setdispTicket(displayTickets);
  }
  return (
    <Container>
      <Row>
        <Col>
        <BreadcrumbPage page = "Ticket Lists"/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Link to="/add-ticket">
          <Button variant="primary">Add New Ticket</Button> 
          </Link>
        </Col>
        <Col className="text-right">
         <SearchForm 
         handleOnChange = {handleOnChange}
         str = {str}
         />
        </Col>
      </Row>
      <hr/>
      <Row className="mt-4">
        <Col>
         <TicketTable tickets={dispTicket}/>
        </Col>
      </Row>
    </Container>
      
  )
}
