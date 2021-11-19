import React from "react";
import ghandi from "../images/ghandi.jpeg";
import { Container, Card } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <Container style={{ marginTop: "5%" }}>
        <Card>
          <Card.Img src={ghandi} alt="Card image" />
          <Card.ImgOverlay></Card.ImgOverlay>
        </Card>
        <br />
        <h3 align="center">
          Live as if you were to die tomorrow. Learn as if you were to live
          forever.
        </h3>
        <p align="center">– Gandhi</p>
      </Container>
      <Card>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.{" "}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};
