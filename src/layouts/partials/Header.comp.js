import React from "react";
import { Navbar, Nav, NavbarBrand, img } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export const Header = () => {
  const history = useHistory();
  const logOut = () => {
    history.push("/");
  }
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="55" height="45" />
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">

          <LinkContainer to="/dashboard">
            <Nav.Link >Dashboard</Nav.Link>
          </LinkContainer>
            
          <LinkContainer to="/client">
            <Nav.Link >Client</Nav.Link> 
          </LinkContainer>
          <LinkContainer to="/ticket-lists">
            <Nav.Link >Ticket</Nav.Link> 
          </LinkContainer>
          
          <Nav.Link onClick={logOut}>Logout</Nav.Link>
          {/* this dashboard and app.js dashboard path should be the same
          
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/client">Client</Link>

          {/* this ticket-lists and app.js ticket-lists path should be the same which takes to the ticketsLists page*/}
          {/*   
          <Link to="/ticket-lists">Ticket</Link>
          <Link to="">Logout</Link> */}

          
          
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
