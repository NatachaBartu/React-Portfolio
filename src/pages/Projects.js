import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import meme from "../images/meme.jpg";
import spaceUp from "../images/rails.jpg";
import open from "../images/open.jpg";
import gitHub from "../images/gitHub.jpg";

export function Projects() {
  return (
    <>
      <Container className=" mb-2 text-center" style={{ marginTop: "40px" }}>
        <h1> My projects!</h1>
        <br />

        <Container style={{ justifyContent: "space-around" }}>
          <Row>
            {[
              {
                title: "My First Portfolio",
                image: open,
                text: `In my first portfolio, I had an excellent opportunity to
            handle pure HTML, Sass and CSS. I still need a bit to touch,
            but I left to see my improvement as I created new portfolios
            in another framework for comparing.`,
                button: {
                  title: "Portfolio",
                  url: "http://natacha-bartu.netlify.app",
                },
              },
              {
                title: "Ruby on Rails",
                image: spaceUp,
                text: `On Ruby on Rails, I learned how to use database, tables,
            backend and frontend during the build app. The project was
            quite fun.`,
                button: {
                  title: "Ruby on Rails",
                  url: "https://github.com/NatachaBartu/space-up",
                },
              },
              {
                title: "Hackathon",
                image: meme,
                text: `Hackathon was a fun project that I learned how to work as a
                group on a build process of an application. It was built in
                React Platform, Git and GitHub tools and some Bootstrap.`,
                button: {
                  title: "Hackathon",
                  url: "https://github.com/NatachaBartu/hackathon_memeGenerator",
                },
              },
              {
                title: "GitHub Challenges",
                image: gitHub,
                text: `Coming Soon!`,
                button: {
                  title: "GitHub Challenges",
                  url: "https://github.com/NatachaBartu/Challenges",
                },
              },
            ].map((item) => (
              <Col>
                <Card
                  style={{
                    width: "300px",
                    height: "600px",
                    boxSizing: "border-box",
                    margin: "5px",
                    marginBottom: "20px",
                    padding: "7px",
                  }}
                >
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>

                    <Button
                      size="lg"
                      className="mb-2 text-center"
                      variant="outline-dark"
                      href={item.button.url}
                    >
                      {" "}
                      {item.button.title}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}
