import React from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import logo from "../images/logo.png";

const MenuBar = () => {
  return (
    <div>
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/"></Nav.Link>
                <Nav.Link href="/about">About Me</Nav.Link>
                <Nav.Link href="/skills">Tech Skills</Nav.Link>
                <Nav.Link href="/contact">Get in Touch</Nav.Link>
                <NavDropdown title="Key Projects" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    First portfolio
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Ruby on Rails
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Hackathon Group Project
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    GitHub Challenges
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default MenuBar;
