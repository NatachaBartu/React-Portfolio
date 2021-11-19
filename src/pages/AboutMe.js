import React from "react";
import { Card, Button, Container } from "react-bootstrap";

export const AboutMe = () => {
  return (
    <>
      <Container className=" mb-2 text-center" style={{ marginTop: "40px" }}>
        <Card border="dark" className="text-center">
          <Card.Header>Natacha Bartu</Card.Header>
          <Card.Body>
            <Card.Title>Junior Web Developer</Card.Title>
            <Card.Text>
              I am starting a new career a web developer with a great passion
              for front-end development. I am keen to learn every aspect of the
              development life-cycle.
            </Card.Text>
            <Button
              variant="outline-dark"
              href="https://www.linkedin.com/in/natachabartu/"
              style={{ margin: "20px" }}
            >
              LinkedIn
            </Button>
            <Button
              variant="outline-dark"
              href="https://github.com/NatachaBartu"
            >
              GitHub
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Sometimes, you need a step aside, get some air and remind yourself
            of who you are and who you want to be.{" "}
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};
