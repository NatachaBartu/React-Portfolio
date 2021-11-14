import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../images/logo.png";
export const TechSkills = () => {
  return (
    <Container>
      <h1>My Tech Skills!</h1>
      <br />
      <p>
        This area some Languages, Tools, Platforms and Framework that I've been
        learning!{" "}
      </p>
      <br />
      <Container>
        <Row>
          <Row>
            <Col xs={6} md={4}>
              <Image
                src={logo}
                roundedCircle
                style={{ height: "150px", margin: "10px", padding: "3px" }}
              />
            </Col>
            <Col xs={6} md={4}>
              <Image
                src={logo}
                roundedCircle
                style={{ height: "150px", margin: "10px", padding: "3px" }}
              />
            </Col>
            <Col xs={6} md={4}>
              <Image
                src={logo}
                roundedCircle
                style={{ height: "150px", margin: "10px", padding: "3px" }}
              />
            </Col>
            <Col xs={6} md={4}>
              <Image
                src={logo}
                roundedCircle
                style={{ height: "150px", margin: "10px", padding: "3px" }}
              />
            </Col>
            <Col xs={6} md={4}>
              <Image
                src={logo}
                roundedCircle
                style={{ height: "150px", margin: "10px", padding: "3px" }}
              />
            </Col>
            <Col xs={6} md={4}>
              <Image
                src={logo}
                roundedCircle
                style={{ height: "150px", margin: "10px", padding: "3px" }}
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
};
