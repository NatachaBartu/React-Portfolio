import React from "react";
import { Card, Button } from "react-bootstrap";

export const AboutMe = () => {
  return (
    <div>
      <h1>Let's meet!</h1>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Natacha Bartu</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Junior Web Developer
          </Card.Subtitle>
          <Card.Text>
            I am starting a new career a web developer with a great passion for
            front-end development. I am keen to learn every aspect of the
            development life-cycle.
          </Card.Text>
          <Button variant="outline-dark" href="/">
            go back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
