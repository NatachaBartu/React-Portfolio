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
        <Card>
          <Card.Body>
            <blockquote className="blockquote mb-0" align="center">
              <h4 style={{ marginBottom: "20px" }}>
                {" "}
                Live as if you were to die tomorrow. <br />
                Learn as if you were to live forever.{" "}
              </h4>
              <footer className="blockquote-footer">
                <cite title="Gandhi">Gandhi</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
