import "./style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Logo } from "../../components/atoms";
import {
  SideNavbar,
  UserProfile,
  NavbarComponent,
} from "../../components/molecules";
import { user } from "../../fakeData";

export default function CreatePost() {
  // set title page
  const title = "Create Post";
  document.title = "DumbGram | " + title;

  const [preview, setPreview] = useState(null);
  const [form, setForm] = useState({
    caption: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleOnSubmit = () => {
    navigate("/feed");
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
            <h1 className="text-white fw-bold mt-5">Create Post</h1>
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
                Upload Photos or Videos
              </label>
              <Form.Control
                as="textarea"
                name="caption"
                value={form.caption}
                placeholder="Caption"
                style={{ height: "200px" }}
                onChange={handleOnChange}
              />
              <div className="ms-auto d-flex justify-content-end">
                <Button
                  type="submit"
                  className="mt-5"
                  style={{ padding: "12px 20px" }}
                >
                  Upload
                </Button>
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
