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
    </>
  );
};
