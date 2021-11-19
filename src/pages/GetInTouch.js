import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

export const GetInTouch = () => {
  return (
    <>
      <Container className=" mb-2 text-center" style={{ marginTop: "40px" }}>
        <h1>Get in Touch</h1>
        <br />
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Company</Form.Label>
            <Form.Control placeholder="Company from" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
