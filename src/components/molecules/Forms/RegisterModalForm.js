import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function RegisterModalForm(props) {
  const { setMessage } = props;
  const [user, setUser] = useState({});
  const [state, setState] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUser({ ...state });
    if (!user.email || !user.name || !user.name || !user.password) {
      return setMessage("Harap isi semua ya kak field nya.");
    }
    setMessage("");
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Button className="w-100 mt-4 p-2" type="submit">
        Submit
      </Button>
    </Form>
  );
}
