import React from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import logo from "../images/logo.png";

const MenuBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <Image
              alt="logo"
              src={logo}
              roundedCircle
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            NB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />{" "}
          <Navbar.Collapse id="responsive-navbar-nav">
            {" "}
            <Nav className="me-auto">
              <Nav.Link href="/"></Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
              <Nav.Link href="/skills">Tech Skills</Nav.Link>
              <Nav.Link href="/contact">Get in Touch</Nav.Link>
              <Nav.Link href="/projects">My Projects</Nav.Link>
              <NavDropdown title="Key Projects" id="collasible-nav-dropdown">
                <NavDropdown.Item href="http://natacha-bartu.netlify.app">
                  First portfolio
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/NatachaBartu/space-up">
                  Ruby on Rails
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/NatachaBartu/hackathon_memeGenerator">
                  Hackathon Group Project
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/NatachaBartu/Challenges">
                  GitHub Challenges
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
