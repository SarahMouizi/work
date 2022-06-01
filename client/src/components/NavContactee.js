import React from 'react'
import { Navbar, Container ,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';



const NavContactee = () => {
  return (
    <div>
         <Navbar bg="black" variant="black">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      
      <Nav.Link as = {Link} to = '/'>Home</Nav.Link>
      <Nav.Link as = {Link} to = '/contactees'>Contact</Nav.Link>
      <Nav.Link as = {Link} to = '/addContactees'>Adding</Nav.Link>
      <Nav.Link as = {Link} to = '/update/:id'>update</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavContactee