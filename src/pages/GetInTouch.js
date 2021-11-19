import React from "react";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";

export const GetInTouch = () => {
  return (
    <>
      <Container className=" mb-2 text-center" style={{ marginTop: "40px" }}>
        <h1>Get in Touch</h1>
        <br />
        <Card
          style={{
            padding: "30px",
            boxSizing: "border-box",
            border: " 2px solid pink",
          }}
        >
          <Card.Body>****</Card.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Company</Form.Label>
              <Form.Control placeholder="Company from" />
            </Form.Group>
            <Button variant="outline-dark" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
};
