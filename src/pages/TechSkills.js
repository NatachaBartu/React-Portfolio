import React from "react";
import { Container, Card } from "react-bootstrap";
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
        <Card>
          <GrReactjs size="7rem" />

          <AiOutlineHtml5 size="7rem" />

          <DiCss3Full size="7rem" />

          <DiHeroku size="7rem" />

          <SiNetlify size="7rem" />

          <VscCode size="7rem" />

          <FaBootstrap size="7rem" />

          <SiPostgresql size="7rem" />
        </Card>
      </Container>
    </Container>
  );
};
