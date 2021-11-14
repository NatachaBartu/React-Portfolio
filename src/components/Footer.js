import React from "react";
import { Card } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <br />
      <Card bg="dark" variant="dark" className="text-center">
        <Card.Footer style={{ color: "white" }}>
          &copy;{new Date().getFullYear()} Natacha Bartu | All right reserved
          <br />
          <AiFillGithub />
          <AiFillLinkedin />
        </Card.Footer>
      </Card>
    </>
  );
};
