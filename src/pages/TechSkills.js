import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full, DiHeroku } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { SiNetlify, SiPostgresql } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export const TechSkills = () => {
  return (
    <Container>
      <h1>My Tech Skills!</h1>
      <br />
      <p>
        This area some Languages, Tools, Platforms and Framework that I've been
        learning!{" "}
      </p>
      <br />

      <Container>
        <Row>
          {[
            {
              image: <SiNetlify size="5rem" />,
              title: "Netlify",
            },
            {
              image: <SiPostgresql size="5rem" />,
              title: "Postgresql",
            },
            {
              image: <AiOutlineHtml5 size="5rem" />,
              title: "HTML",
            },
            {
              image: <DiCss3Full size="5rem" />,
              title: "Css",
            },
            {
              image: <DiHeroku size="5rem" />,
              title: "Heroku",
            },
            {
              image: <FaBootstrap size="5rem" />,
              title: "Bootstrap",
            },
            {
              image: <GrReactjs size="5rem" />,
              title: "React",
            },
            {
              image: <VscCode size="5rem" />,
              title: "VsCode",
            },
          ].map((item) => (
            <Col style={{ margin: "5px" }}>
              {item.image} {item.title}
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
