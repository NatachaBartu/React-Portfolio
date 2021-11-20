import React from "react";
import { useState } from "react";
import { Container, Form, Button, Card, Row } from "react-bootstrap";
import emailjs from "emailjs-com";

export const GetInTouch = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qfwwwhw",
        "template_dev9cp9",
        e.target,
        "user_N5oft2SPwCHFUl2rFxK7h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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

          <Form
            noValidate
            validated={validated}
            onSubmit={(sendEmail, handleSubmit)}
          >
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Please, enter your name."
                name="name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Please, enter email"
                name="email"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Leave a message here"
                name="message"
              />
            </Form.Group>
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
