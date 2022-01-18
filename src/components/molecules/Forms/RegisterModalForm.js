import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function RegisterModalForm(props) {
  const { setMessage, setIsloginModal } = props;
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
    if (!state.email || !state.name || !state.username || !state.password) {
      return setMessage("Harap isi semua ya kak field nya.");
    }
    setMessage("");
    setState({
      email: "",
      name: "",
      username: "",
      password: "",
    });
    setIsloginModal(true);
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleOnChange}
          value={state.email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleOnChange}
          value={state.name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleOnChange}
          value={state.username}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnChange}
          value={state.password}
        />
      </Form.Group>
      <Button className="w-100 mt-4 p-2" type="submit">
        Submit
      </Button>
    </Form>
  );
}
