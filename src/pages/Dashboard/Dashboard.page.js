import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { BreadcrumbPage } from "../../components/breadcrumb/Breadcrumb.comp";
import {Link} from 'react-router-dom';
export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbPage page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5">
          <Link to="/add-ticket">
          
          <Button
            variant="primary"
            style={{ fontSize: "1rem", padding: "10px 20px" }}
          >
            Add New Ticket
          </Button>
          </Link>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-center mt-3">
          <div>Total Clients: 50</div>
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 50</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4">
          <div>Recently Added Tickets:</div>
        </Col>
      </Row>
      <Row>
        <Col className="ticket-table">
          {/* props coming from dummy-tickts.json file */}
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
