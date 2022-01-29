import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Logo } from "../../components/atoms";
import { user } from "../../fakeData";
import {
  DetailFeedModal,
  PostedImages as Feed,
  SideNavbar,
  UserProfile,
  NavbarComponent,
} from "../../components/molecules";

export default function Home() {
  // set title
  const title = "Feed";
  document.title = "DumbGram | " + title;

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState();

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
          <h1 className="text-white fw-bold mt-3 ps-4">Feed</h1>
          {loading ? (
            loading
          ) : (
            <Feed
              isFeed
              feeds={user.feed}
              setSelectedImage={setSelectedImage}
            />
          )}
          {selectedImage && (
            <DetailFeedModal
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
