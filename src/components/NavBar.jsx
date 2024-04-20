import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = ({setSigned}) => {
  return (
    <div>
      <Navbar className="w-75 m-auto" bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Clarusway</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home">
              Home
            </Nav.Link>
            {/* <Nav.Link to={"/"} href="#home">Home</Nav.Link> */}
            <Nav.Link as={Link} to="/About" href="#About">
              About
            </Nav.Link>
            <Nav.Link as={Link} onClick={()=> setSigned(false)} to="/" href="#Logout">
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
