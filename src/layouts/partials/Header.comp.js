import React from "react";
import { Navbar, Nav, NavbarBrand, img } from "react-bootstrap";
import logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <Navbar bg="info" variant="dark">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" width="55" height="45" />
      </Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/Dashboard">Client</Nav.Link>
          <Nav.Link href="/Dashboard">Ticket</Nav.Link>
          <Nav.Link href="/Dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
