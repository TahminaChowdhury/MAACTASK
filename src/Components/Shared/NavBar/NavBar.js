import React from 'react';
import './NavBar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../../images/Logo.png';

const NavBar = () => {
  return (
    <Navbar expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="101.74px"
            height="48px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <button className="login-btn">Login</button>
            <button className="reg-btn">Registration</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
