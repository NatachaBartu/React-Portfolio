import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full, DiHeroku, DiRuby } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SiNetlify, SiPostgresql } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export const TechSkills = () => {
  return (
    <Container className="mx-auto text-center" style={{ marginTop: "40px" }}>
      <h1>My Tech Skills!</h1>
      <br />
      <p>
        This area some Languages, Tools, Platforms and Framework that I've been
        learning!{" "}
      </p>
      <br />

      <Container>
        <Row xs={6} md={4}>
          {[
            {
              image: <SiNetlify size="5rem" color="#E86565" />,
              title: "Netlify",
            },
            {
              image: <SiPostgresql size="5rem" color="#E86565" />,
              title: "Postgresql",
            },
            {
              image: <AiOutlineHtml5 size="5rem" color="#E86565" />,
              title: "HTML",
            },
            {
              image: <DiCss3Full size="5rem" color="#E86565" />,
              title: "Css",
            },
            {
              image: <DiHeroku size="5rem" color="#E86565" />,
              title: "Heroku",
            },
            {
              image: <FaBootstrap size="5rem" color="#E86565" />,
              title: "Bootstrap",
            },
            {
              image: <GrReactjs size="5rem" color="#E86565" />,
              title: "React",
            },
            {
              image: <VscCode size="5rem" color="#E86565" />,
              title: "VsCode",
            },
            {
              image: <DiRuby size="5rem" color="#E86565" />,
              title: "Ruby",
            },
          ].map((item) => (
            <Col style={{ margin: "15px" }}>
              {item.image}
              <Col>{item.title}</Col>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
