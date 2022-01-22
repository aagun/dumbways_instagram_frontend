import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Logo } from "../../components/atoms";
import {
  DetailFeedModal,
  PostedImages,
  SideNavbar,
  UserProfile,
} from "../../components/molecules";
import NavbarComponent from "../../components/molecules/Navbar";

export default function Home() {
  document.querySelector("title").innerHTML = "Home";
  const user = {
    profile: {
      id: 1,
      fullName: "Zayn",
      email: "zayn@mail.com",
      username: "zayn",
      bio: "Rapper in Black Pink, Brand Ambasador Penshoppe",
      image: require("../../assets/images/avatar/zayn.png"),
      insight: {
        posts: 6,
        followers: 30,
        following: 1,
      },
    },
    feed: [
      {
        id: 1,
        fullName: "Zayn",
        username: "zayn",
        photo: require("../../assets/images/avatar/zayn.png"),
        image: require("../../assets/images/1.png"),
        like: 54000,
        caption: "Beautiful place",
        comment: [
          {
            id: 1,
            photo: require("../../assets/images/avatar/lisa.png"),
            username: "lisa",
            comment: "Awesome!",
          },
          {
            id: 2,
            photo: require("../../assets/images/avatar/zayn.png"),
            username: "zayn",
            comment: "Thanks!",
          },
        ],
      },
      {
        id: 2,
        fullName: "Zayn",
        username: "zayn",
        photo: require("../../assets/images/avatar/zayn.png"),
        image: require("../../assets/images/4.png"),
        like: 31922,
        caption: "Nostalgic",
        comment: [
          {
            id: 1,
            photo: require("../../assets/images/avatar/lisa.png"),
            username: "lisa",
            comment: "Awesome!",
          },
          {
            id: 2,
            photo: require("../../assets/images/avatar/zayn.png"),
            username: "zayn",
            comment: "Thanks!",
          },
        ],
      },
      {
        id: 3,
        fullName: "Zayn",
        username: "zayn",
        photo: require("../../assets/images/avatar/zayn.png"),
        image: require("../../assets/images/2.png"),
        like: 2350091,
        caption: "Join",
        comment: [
          {
            id: 1,
            photo: require("../../assets/images/avatar/lisa.png"),
            username: "lisa",
            comment: "Awesome!",
          },
          {
            id: 2,
            photo: require("../../assets/images/avatar/zayn.png"),
            username: "zayn",
            comment: "Thanks!",
          },
        ],
      },
      {
        id: 4,
        fullName: "Zayn",
        username: "zayn",
        photo: require("../../assets/images/avatar/zayn.png"),
        image: require("../../assets/images/5.png"),
        like: 9091,
        caption: "Yeah!",
        comment: [
          {
            id: 1,
            photo: require("../../assets/images/avatar/lisa.png"),
            username: "lisa",
            comment: "Awesome!",
          },
          {
            id: 2,
            photo: require("../../assets/images/avatar/zayn.png"),
            username: "zayn",
            comment: "Thanks!",
          },
        ],
      },
      {
        id: 5,
        fullName: "Zayn",
        username: "zayn",
        photo: require("../../assets/images/avatar/zayn.png"),
        image: require("../../assets/images/3.png"),
        like: 19091,
        caption: "See in my eye",
        comment: [
          {
            id: 1,
            photo: require("../../assets/images/avatar/lisa.png"),
            username: "lisa",
            comment: "Awesome!",
          },
          {
            id: 2,
            photo: require("../../assets/images/avatar/zayn.png"),
            username: "zayn",
            comment: "Thanks!",
          },
        ],
      },
      {
        id: 6,
        fullName: "Zayn",
        username: "zayn",
        photo: require("../../assets/images/avatar/zayn.png"),
        image: require("../../assets/images/7.png"),
        like: 9091,
        caption: "Peacefull",
        comment: [
          {
            id: 1,
            photo: require("../../assets/images/avatar/lisa.png"),
            username: "lisa",
            comment: "Awesome!",
          },
          {
            id: 2,
            photo: require("../../assets/images/avatar/zayn.png"),
            username: "zayn",
            comment: "Thanks!",
          },
        ],
      },
    ],
  };
  const [selectedImage, setSelectedImage] = useState();

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
          <PostedImages
            isFeed
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
