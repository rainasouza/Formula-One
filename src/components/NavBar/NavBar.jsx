import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';  // Import the custom CSS

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">I Cavallini </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
            <Nav.Link as={Link} to="/circuits">Circuits</Nav.Link>
            <Nav.Link as={Link} to="/constructors">Constructors</Nav.Link>
            <Nav.Link as={Link} to="/drivers">Drivers</Nav.Link>
            <Nav.Link as={Link} to="/laps">Lap Times</Nav.Link>
            <Nav.Link as={Link} to="/winners">Winners</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
