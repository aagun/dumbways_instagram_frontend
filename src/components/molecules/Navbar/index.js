import "./style.css";
import React, { useState } from "react";
import {
  Navbar,
  Image,
  Nav,
  Container,
  FormControl,
  InputGroup,
  Button,
  Dropdown,
  Row,
  Col,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icons, ImagesForLandingPage } from "../../../assets";
import { ProfilePicture } from "../../atoms";

export default function NavbarComponent() {
  return (
    <Navbar
      sticky="top"
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "#0b0b0b " }}
    >
      <Container>
        <InputGroup className="d-flex w-40">
          <InputGroup.Text id="basic-addon1">
            <Button className="btn-secondary" type="button">
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup.Text>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </InputGroup>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="d-flex align-items-center ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                rootClose={true}
                overlay={
                  <Popover id="popover-basic" arrowProps={{ left: "90" }}>
                    <Popover.Header as="h3">Popover right</Popover.Header>
                    <Popover.Body>
                      And here's some <strong>amazing</strong> content. It's
                      very engaging. right?
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="success">Click me to see</Button>
              </OverlayTrigger>
              <Dropdown className="d-inline border-0" drop="down">
                <Dropdown.Toggle
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  variant="secondary"
                >
                  <Image src={Icons.Bell} />
                </Dropdown.Toggle>

                <Dropdown.Menu
                  className="mt-4"
                  style={{ backgroundColor: "#1F1F1F", borderRadius: "15px" }}
                >
                  <li class="notification-box">
                    <Row className="px-5 my-3">
                      <Col md={1}>
                        <ProfilePicture
                          isSmall
                          dataImage={{ image: ImagesForLandingPage[4] }}
                          style={{ width: "30px", height: "30px" }}
                        />
                      </Col>
                      <Col md={11} className="ps-4">
                        <p className="mb-0">egi_lol</p>
                        <small>
                          <strong>Komentar: </strong>Nice place
                        </small>
                      </Col>
                    </Row>
                  </li>
                  <li class="notification-box">
                    <Row className="px-5 my-3">
                      <Col md={1}>
                        <ProfilePicture
                          isSmall
                          dataImage={{ image: ImagesForLandingPage[3] }}
                          style={{ width: "30px", height: "30px" }}
                        />
                      </Col>
                      <Col md={11} className="ps-4">
                        <p className="mb-0">abdul_h</p>
                        <small>
                          <strong>Komentar: </strong>Nice place
                        </small>
                      </Col>
                    </Row>
                  </li>
                  <li class="notification-box">
                    <Row className="px-5 my-3">
                      <Col md={1}>
                        <ProfilePicture
                          isSmall
                          dataImage={{ image: ImagesForLandingPage[3] }}
                          style={{ width: "30px", height: "30px" }}
                        />
                      </Col>
                      <Col md={11} className="ps-4">
                        <p className="mb-0">abdul_h</p>
                        <small>
                          <strong>Komentar: </strong>Nice place
                        </small>
                      </Col>
                    </Row>
                  </li>
                  <li class="notification-box">
                    <Row className="px-5 my-3">
                      <Col md={1}>
                        <ProfilePicture
                          isSmall
                          dataImage={{ image: ImagesForLandingPage[3] }}
                          style={{
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </Col>
                      <Col md={11} className="ps-4">
                        <p className="mb-0">abdul_h</p>
                        <small>
                          <strong>Komentar: </strong>Nice place
                        </small>
                      </Col>
                    </Row>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </>
            <Link to="/home/message" className="ms-3 me-4">
              <Image src={Icons.Send} />
            </Link>
            {/* <Button onClick={handleOnClick}>Create Post</Button> */}
            <Link to="/home/create-post" className="btn btn-primary ms-3 py-2">
              <span
                className="rounded-3 fw-bold fs-6 me-2"
                style={{
                  padding: "3px 8px",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                }}
              >
                +
              </span>
              Create post
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
