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
              <p>
                {" "}
                Live as if you were to die tomorrow. Learn as if you were to
                live forever.{" "}
              </p>
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
