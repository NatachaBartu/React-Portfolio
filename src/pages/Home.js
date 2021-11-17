import React from "react";
import ghandi from "../images/ghandi.jpeg";
import { Figure, Container } from "react-bootstrap";

export const Home = () => {
  return (
    <>
      <Container>
        <Figure>
          <Figure.Image
            alt="ghandi"
            src={ghandi}
            style={{
              backgroundImage: `url(${ghandi})`,
              backgroundSize: "cover",
              marginTop: "50px",
            }}
            rounded
          />
          <Figure.Caption align="center">
            Live as if you were to die tomorrow. Learn as if you were to live
            forever.
            <p align="center">– Gandhi</p>
          </Figure.Caption>
        </Figure>
      </Container>
    </>
  );
};
