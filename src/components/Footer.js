import React from "react";
import { Card } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

export const Footer = () => {
  return (
    <>
      <br />
      <Card
        className="d-flex text-center justify-content-end"
        bg="dark"
        variant="dark"
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        <Card.Footer style={{ color: "white" }}>
          &copy;{new Date().getFullYear()} Natacha Bartu | All right reserved
          <br />
          <AiFillGithub />
          <AiFillLinkedin />
          <HiOutlineMail />
        </Card.Footer>
      </Card>
    </>
  );
};
