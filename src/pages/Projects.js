import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import meme from "../images/meme.jpg";
import spaceUp from "../images/rails.jpg";
import open from "../images/open.jpg";
import gitHub from "../images/gitHub.jpg";
//import logo from "../images/logo.png";
import ricon from "../images/react-icon.jpg";
import calories from "../images/calories.jpg";

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
                text: `Web app to showcase my skills in Html, CSS and Sass. It was the project where a began my journey as a web developer. It is a static web page that describes the skills that I've learned so far.`,
                button: {
                  title: "Portfolio",
                  url: "http://natacha-bartu.netlify.app",
                },
              },
              {
                title: "React Portfolio",
                image: ricon,
                text: `This is my new Portfolio that i am rewriting after learn react. I have so much love for this project. I'm still working on it. `,
                button: {
                  title: "React Portfolio",
                  url: "https://github.com/NatachaBartu/React-Portfolio",
                },
              },
              {
                title: "Ruby on Rails",
                image: spaceUp,
                text: `Marketplace to sell/buy space trips. Space Up was a project that I strengthened my fundamentals about ruby on rails. It was a hard work project as it uses ruby on rails on it cores.
                `,
                button: {
                  title: "Ruby on Rails",
                  url: "https://github.com/NatachaBartu/space-up",
                },
              },
              {
                title: "Get track on Diet",
                image: calories,
                text: `It is an app to keep a diet on track.This is a console app that I develop using my knowledge of Ruby Language.
                `,
                button: {
                  title: "Get track on Diet",
                  url: "https://github.com/NatachaBartu/NatachaBartudaCostaPincerno_T1A3",
                },
              },
              {
                title: "Meme Generator",
                image: meme,
                text: `Web app to browser meme and custom messages. It was a project developed during a Hackathon. It was a fun project that we learnt how to work as a team using our knowledge using react, git and GitHub.`,
                button: {
                  title: "Meme Generator",
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
