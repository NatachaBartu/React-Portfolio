import React from "react";
import { Card } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <br />
      <Card bg="dark" variant="dark" className="text-center">
        <Card.Footer style={{ color: "white" }}>
          &copy;{new Date().getFullYear()} Natacha Bartu | All right reserved
        </Card.Footer>
      </Card>
    </>
  );
};
