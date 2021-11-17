import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
//import logo from "../images/logo.png";
import meme from "../images/meme.png";
import spaceUp from "../images/space-up.png";
import open from "../images/open.png";
import GitHub from "../images/GitHub.png";

export function Projects() {
  return (
    <>
      <Container style={{ marginTop: "40px" }}>
        <Row>
          <Col>
            <Card
              style={{
                width: "18rem",
                margin: "15px",
                padding: "7px",
              }}
            >
              <Card.Img variant="top" src={open} />
              <Card.Body>
                <Card.Title>My First Portfolio</Card.Title>
                <Card.Text>
                  In my first portfolio, I had an excellent opportunity to
                  handle pure HTML, Sass and CSS. I still need a bit to touch,
                  but I left to see my improvement as I created new portfolios
                  in another framework for comparing.
                </Card.Text>
                <Button
                  variant="outline-dark"
                  href="http://natacha-bartu.netlify.app"
                >
                  {" "}
                  My First Portfolio
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "18rem",
                margin: "15px",
                padding: "7px",
              }}
            >
              <Card.Img variant="top" src={spaceUp} />
              <Card.Body>
                <Card.Title>Ruby on Rails</Card.Title>
                <Card.Text>
                  On Ruby on Rails, I learned how to use database, tables,
                  backend and frontend during the build app. The project was
                  quite fun.
                </Card.Text>
                <Button
                  variant="outline-dark"
                  href="https://github.com/NatachaBartu/space-up"
                >
                  Space Up Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "18rem",
                margin: "15px",
                padding: "7px",
              }}
            >
              <Card.Img variant="top" src={meme} />
              <Card.Body>
                <Card.Title>Hackathon Group Project</Card.Title>
                <Card.Text>
                  Hackathon was a fun project that I learned how to work as a
                  group on a build process of an application. It was built in
                  React Platform, Git and GitHub tools and some Bootstrap.
                </Card.Text>
                <Button
                  variant="outline-dark"
                  href="https://github.com/NatachaBartu/hackathon_memeGenerator"
                >
                  Hackathon
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "18rem",
                margin: "15px",
                padding: "7px",
              }}
            >
              <Card.Img variant="top" src={GitHub} />
              <Card.Body>
                <Card.Title>GitHub Challenges</Card.Title>
                <Card.Text>Coming Soon!</Card.Text>
                <Button
                  variant="outline-dark"
                  href="https://github.com/NatachaBartu/Challenges"
                >
                  GitHub Challenges
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
