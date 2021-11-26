import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full, DiHeroku, DiRuby } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { GrReactjs, GrNode } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import {
  SiNetlify,
  SiPostgresql,
  SiSass,
  SiJavascript,
  SiRubyonrails,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
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
              image: <AiOutlineHtml5 size="5rem" color="#024B7E" />,
              title: "HTML",
            },
            {
              image: <DiCss3Full size="5rem" color="#024B7E" />,
              title: "Css",
            },
            {
              image: <SiSass size="5rem" color="#024B7E" />,
              title: "Sass",
            },
            {
              image: <SiJavascript size="5rem" color="#024B7E" />,
              title: "JavaScript",
            },
            {
              image: <GrReactjs size="5rem" color="#024B7E" />,
              title: "React",
            },
            {
              image: <DiRuby size="5rem" color="#024B7E" />,
              title: "Ruby",
            },
            {
              image: <SiRubyonrails size="5rem" color="#024B7E" />,
              title: "Ruby on Rails",
            },
            {
              image: <BsGithub size="5rem" color="#024B7E" />,
              title: "GitHub",
            },
            {
              image: <VscCode size="5rem" color="#024B7E" />,
              title: "VsCode",
            },
            {
              image: <SiPostman size="5rem" color="#024B7E" />,
              title: "Postman",
            },
            {
              image: <SiNetlify size="5rem" color="#024B7E" />,
              title: "Netlify",
            },
            {
              image: <DiHeroku size="5rem" color="#024B7E" />,
              title: "Heroku",
            },
            {
              image: <SiPostgresql size="5rem" color="#024B7E" />,
              title: "Postgresql",
            },

            {
              image: <SiMongodb size="5rem" color="#024B7E" />,
              title: "MongoDB",
            },
            {
              image: <GrNode size="5rem" color="#024B7E" />,
              title: "Node",
            },
            {
              image: <FaBootstrap size="5rem" color="#024B7E" />,
              title: "Bootstrap",
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
