import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const MenuBar = () => {
  return (
    <div>
      <>
        <Container>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">NB</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">About Me</Nav.Link>
                  <Nav.Link href="#link">Tech Skills</Nav.Link>
                  <Nav.Link href="#link">Get in Touch</Nav.Link>
                  <NavDropdown title="Key Projects" id="basic-nav-dropdown">
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
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </>
    </div>
  );
};

export default MenuBar;
