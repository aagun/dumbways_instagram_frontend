import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Logo } from "../../components/atoms";
import {
  DetailFeedModal,
  PostedImages,
  SideNavbar,
  UserProfile,
  NavbarComponent,
} from "../../components/molecules";
import { user } from "../../fakeData";

export default function Explore() {
  // set title
  const title = "Explore";
  document.title = "DumbGram | " + title;

  const [selectedImage, setSelectedImage] = useState(null);

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
          <h1 className="text-white fw-bold mt-3 ps-4">Explore</h1>
          <PostedImages
            isExplore
            feeds={user.feed}
            setSelectedImage={setSelectedImage}
          />
          {selectedImage && (
            <DetailFeedModal
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              images={user.feed}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
