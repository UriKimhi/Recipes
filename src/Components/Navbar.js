import React from "react";
import { Nav, Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { BsPerson ,FaRegRegistered } from "react-icons/bs";
import { FaRegistered } from "react-icons/fa";
export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">My Recipes</Nav.Link>
            <Nav.Link href="#pricing">Search Recipes</Nav.Link>
          </Nav>
        </Container>
        <Container>
            <Nav className="me-auto" style={{paddingLeft:"600px" }}>
            <Nav.Link href="#home">Login <BsPerson/> </Nav.Link>
            <Nav.Link href="#features">Register <FaRegistered/></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
};

