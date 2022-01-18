import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LoginModalForm(props) {
  const { setMessage } = props;
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      setMessage("");
      return navigate("/home/feed");
    }
    return setMessage("Isi email sama password dulu kak.");
  };

  return (
    <Form onSubmit={handleOnSubmit} method="POST">
      <Form.Group className="mb-3" controlId="email">
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleOnChange}
          value={state.email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnChange}
          value={state.password}
        />
      </Form.Group>
      <Button type="submit" className="w-100 mt-4 p-2">
        Login
      </Button>
    </Form>
  );
}
