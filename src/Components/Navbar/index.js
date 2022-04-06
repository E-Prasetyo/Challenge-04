import React from 'react';
import { 
  Navbar, Nav, Container, Button, Offcanvas
 } from 'react-bootstrap';
 import { Link as LinkRouter } from 'react-router-dom';
 import imgLogo from '../../Assets/Img/logo.png';
 import './Navbar.css';
 
const myNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-color-navbar">
      <Container className="">
          <Navbar.Brand>
            <LinkRouter to="/" className=''>
                <img src={imgLogo} alt="" />
            </LinkRouter>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Collapse id="navbarScroll" in={false}>
            <Nav
              className="me-auto my-2 my-lg-0 w-100 justify-content-end"
              style={{ maxHeight: '200px', width: '30px' }}
              navbarScroll
            >
              <Nav.Link className="mx-2" href="#action1">Our Service</Nav.Link>
              <Nav.Link className="mx-2" href="#action2">Why Us</Nav.Link>
              <Nav.Link className="mx-2" href="#action3">Testimonial</Nav.Link>
              <Nav.Link className="mx-2" href="#action4">FAQ</Nav.Link>
              <Button className="mx-2" variant="success">Register</Button>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">BCR</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Our Service</Nav.Link>
                <Nav.Link href="#action2">Why Us</Nav.Link>
                <Nav.Link href="#action3">Testimonial</Nav.Link>
                <Nav.Link href="#action4">FAQ</Nav.Link>
              </Nav>
                <Button className="" variant="success">Register</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default myNavbar