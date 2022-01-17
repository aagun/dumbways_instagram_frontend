import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Logo, ProfilePicture } from "../../components/atoms";
import NavbarComponent from "../../components/molecules/Navbar";

export default function Message() {
  const users = [
    {
      name: "Lisa",
      username: "lisa_blp",
      profilePicture: require("../../assets/images/avatar/lisa.png"),
      posts: 200,
      followers: 50.1,
      following: 1,
      bio: "Rapper in Black Pink, Brand Ambasador Penshoppe",
      msg: "yo... sup...",
    },
    {
      name: "Zayn",
      username: "zayn",
      profilePicture: require("../../assets/images/avatar/zayn.png"),
      posts: 1000,
      followers: 150.1,
      following: 1,
      bio: "Brand Ambasador Penshoppe",
      msg: "How are you mate?",
    },
  ];

  return (
    <Container fluid>
      <Row className="message min-vh-100">
        <Col md={3} className="px-0 pb-5">
          <Link to={"/home/feed"}>
            <Logo isSmall className="mt-4 mx-5" />
          </Link>
          <div className="d-flex align-items-center justify-content-center mt-5 ps-5">
            <ProfilePicture
              isMedium
              dataImage={{
                name: users[0].name,
                image: users[0].profilePicture,
              }}
              style={{ marginBottom: "0 !important" }}
            />
            <Col className="ms-3">
              <p className="profile-username-md">{users[0].username}</p>
              <p className="profile-message-md">{users[0].msg}</p>
            </Col>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-5 ps-5">
            <ProfilePicture
              isMedium
              dataImage={{
                name: users[1].name,
                image: users[1].profilePicture,
              }}
              style={{ marginBottom: "0 !important" }}
            />
            <Col className="ms-3">
              <p className="profile-username-md">{users[1].username}</p>
              <p className="profile-message-md">{users[1].msg}</p>
            </Col>
          </div>
        </Col>
        <Col md={9} className="container-fluid pt-4 min-vh-100">
          <NavbarComponent />
          <Container className="d-flex flex-column-reverse h-75">
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Send Message"
                className="p-3 rounded-0"
                aria-label="Message"
              />
            </InputGroup>
            <div
              style={{ height: "100%" }}
              className="d-flex flex-column-reverse mb-5"
            >
              <div className="d-flex flex-column-reverse">
                <Row>
                  <div className="d-flex align-items-center justify-content-center mt-5 ps-5">
                    <ProfilePicture
                      isMedium
                      dataImage={{
                        name: users[1].name,
                        image: users[1].profilePicture,
                      }}
                      style={{ marginBottom: "0 !important" }}
                    />
                    <Col className="ms-3">
                      <p className="profile-username-md">{users[1].username}</p>
                      <p className="profile-message-md">{users[1].msg}</p>
                    </Col>
                  </div>
                </Row>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
