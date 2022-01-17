import React, { useState } from "react";
import { Logo } from "../../components/atoms";
import { ImagesForLandingPage } from "../../assets";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PostedImages as Hero, AuthModal } from "../../components/molecules";

export default function LandingPage(props) {
  document.title = "DumbGram";
  const [show, setShow] = useState(props.show || false);
  const [isLoginModal, setIsLoginModal] = useState(props.show || false);

  const handleShow = (e) => {
    const isLogin = e.target.id;
    setShow(true);
    if (isLogin === "login") {
      return setIsLoginModal(true);
    }
    return setIsLoginModal(false);
  };

  return (
    <Container>
      <Row className="landing-page d-flex justify-content-center align-items-center">
        <Col md={5}>
          <Logo isLarge className="mb-5" />
          <h1 className="title mb-4">Share your best photos or videos</h1>
          <p className="description mb-5">
            Join now, share your creations with another people and enjoy other
            creations.
          </p>
          <Button
            size="lg"
            className="px-5 btn-primary"
            id="login"
            onClick={handleShow}
          >
            Login
          </Button>
          <Button
            size="lg"
            className="px-5 btn-secondary"
            id="register"
            onClick={handleShow}
          >
            Register
          </Button>
          <AuthModal
            show={show}
            setShow={setShow}
            isLoginModal={isLoginModal}
            setIsLoginModal={setIsLoginModal}
          />
        </Col>
        <Col md={7}>
          <Hero isHero dataPosted={ImagesForLandingPage} />
        </Col>
      </Row>
    </Container>
  );
}
