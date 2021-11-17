import React from "react";
import { Card } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

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
          <HiOutlineMail />
        </Card.Footer>
      </Card>
    </>
  );
};
