import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../images/logo.png";
export const TechSkills = () => {
  return (
    <Container>
      <h1>My Tech Skills!</h1>
      <Container
        className="d-flex justify-content-around"
        style={{
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <Row>
          <Col sm>
            <Image src={logo} roundedCircle style={{ height: "8rem" }} />
          </Col>
          <Col sm>
            <Image src={logo} roundedCircle style={{ height: "8rem" }} />
          </Col>
          <Col sm>
            <Image src={logo} roundedCircle style={{ height: "8rem" }} />
          </Col>
          <Col sm>
            <Image src={logo} roundedCircle style={{ height: "8rem" }} />
          </Col>
          <Col sm>
            <Image src={logo} roundedCircle style={{ height: "8rem" }} />
          </Col>
          <Col sm>
            <Image src={logo} roundedCircle style={{ height: "8rem" }} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
