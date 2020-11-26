import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { nanoid } from "nanoid";

const Login = ({ onIdSubmit }) => {
  const idRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };
  const createNewId = () => {
    onIdSubmit(nanoid(10));
  };
  return (
    <Container className="align-items-center d-flex vh-100">
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter your id number</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary">
          Create a new id number
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
