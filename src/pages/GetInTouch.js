import React from "react";
import {
  Container,
  Form,
  Button,
  Card,
  FloatingLabel,
  Row,
} from "react-bootstrap";

export const GetInTouch = () => {
  return (
    <>
      <Container className=" mb-2" style={{ marginTop: "40px" }}>
        <h1>Get in Touch</h1>
        <br />
        <Card
          style={{
            padding: "30px",
            boxSizing: "border-box",
            boxShadow: "5px 7px #c4bcbc",
            border: " 3px solid pink",

            marginBottom: "40px",
          }}
        >
          <Card.Body className="text-center">
            Please enter your details, and I will contact you shortly...Thank
            you!
          </Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please, enter your name."
              />
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Please, enter email" />
              </Form.Group>
            </Form.Group>

            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <Row style={{ justifyContent: "center", padding: "20px" }}>
              <Button variant="outline-dark" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    </>
  );
};
