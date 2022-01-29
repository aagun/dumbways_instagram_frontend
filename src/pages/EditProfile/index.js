import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/atoms";
import {
  SideNavbar,
  UserProfile,
  NavbarComponent,
} from "../../components/molecules";
import { user } from "../../fakeData";

export default function EditProfile() {
  // set title
  const title = "Edit Profile";
  document.title = "DumbGram | " + title;

  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    name: "",
    username: "",
    bio: "",
    image: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      const url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleOnSubmit = () => {
    navigate("/home/feed");
  };

  return (
    <Container fluid>
      <Row className="feed min-vh-100">
        <Col md={3} className="px-0 pb-5">
          <Logo isSmall className="mt-4 mx-5" />
          <UserProfile profile={user.profile} />
          <SideNavbar />
        </Col>
        <Col md={9} className="container-fluid pt-4">
          <NavbarComponent />
          <Container>
            <h1 className="text-white fw-bold mt-5">Edit Profile</h1>
            <Form onSubmit={handleOnSubmit}>
              {preview && (
                <div>
                  <img
                    src={preview}
                    style={{
                      maxWidth: "500px",
                      maxHeight: "500px",
                      objectFit: "cover",
                    }}
                    alt="preview"
                  />
                </div>
              )}
              <Form.Control
                type="file"
                id="upload"
                hidden
                onChange={handleOnChange}
              />
              <label
                htmlFor="upload"
                className="mb-3 mt-5 px-4 py-3 btn btn-primary btn-file fs-6"
              >
                Upload Photos
              </label>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleOnChange}
                  value={form.name}
                  className="py-3"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="username"
                  placeholder="Username"
                  name="username"
                  onChange={handleOnChange}
                  value={form.username}
                  className="py-3"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="bio">
                <Form.Control
                  as="textarea"
                  name="bio"
                  placeholder="Bio"
                  style={{ height: "200px" }}
                  onChange={handleOnChange}
                  value={form.bio}
                />
              </Form.Group>
              <div className="ms-auto d-flex justify-content-end">
                <Button
                  type="submit"
                  className="mt-5"
                  style={{ padding: "12px 30px" }}
                >
                  Save
                </Button>
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
