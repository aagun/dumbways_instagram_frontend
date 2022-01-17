import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Logo } from "../../components/atoms";
import {
  DetailFeedModal,
  PostedImages,
  SideNavbar,
  UserProfile,
} from "../../components/molecules";
import NavbarComponent from "../../components/molecules/Navbar";

export default function EditProfile() {
  const posts = [
    {
      user: {
        username: "zayn",
        profilePicture: require("../../assets/images/avatar/zayn.png"),
      },
      image: require("../../assets/images/1.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../assets/images/avatar/zayn.png"),
      },
      image: require("../../assets/images/4.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../assets/images/avatar/zayn.png"),
      },
      image: require("../../assets/images/2.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../assets/images/avatar/zayn.png"),
      },
      image: require("../../assets/images/5.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../assets/images/avatar/zayn.png"),
      },
      image: require("../../assets/images/3.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../assets/images/avatar/zayn.png"),
      },
      image: require("../../assets/images/7.png"),
      likes: 127321,
    },
  ];
  const users = [
    {
      name: "Lisa",
      username: "lisa_blp",
      profilePicture: require("../../assets/images/avatar/lisa.png"),
      posts: 200,
      followers: 50.1,
      following: 1,
      bio: "Rapper in Black Pink, Brand Ambasador Penshoppe",
    },
    {
      name: "Zayn",
      username: "zayn",
      profilePicture: require("../../assets/images/avatar/zayn.png"),
      posts: 1000,
      followers: 150.1,
      following: 1,
      bio: "Brand Ambasador Penshoppe",
    },
  ];

  const [user, setUser] = useState({
    name: "",
    profilePicture: "",
    username: "",
    posts: "",
    followers: "",
    following: "",
    bio: "",
  });
  const [state, setState] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [userFeed, setUserFeed] = useState([]);
  const [isUser, setIsUser] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    if (username) {
      const findUser = users.find((u) => u.username === username);
      if (findUser) {
        setIsUser(true);
        const userPosts = posts.filter(
          (post) => post.user.username === username
        );
        setState(true);
        setUserFeed([...userPosts]);
        return setUser({ ...user, ...findUser });
      }
      setMessage(`User ${username} not found`);
      setShow(true);
      return setUser({ ...user, ...users[0] });
    }
    setShow(false);
    setUser({ ...user, ...users[0] });
    setState(false);
  }, [username]);

  console.log(userFeed);

  return (
    <Container fluid>
      <Row className="feed min-vh-100">
        <Col md={3} className="px-0 pb-5">
          <Logo isSmall className="mt-4 mx-5" />
          <UserProfile
            user={{ user, params: state }}
            show={show}
            setShow={setShow}
            message={message}
            setMessage={setMessage}
          />
          <SideNavbar />
        </Col>
        <Col md={9} className="container-fluid pt-4">
          <NavbarComponent />
          <Container>
            <h1 className="text-white fw-bold mt-5">Edit Profile</h1>
            <Form onSubmit={"handleOnSubmit"}>
              <span
                className="mb-3 mt-5 px-4 py-3 btn btn-primary btn-file fs-6"
                controlId="email"
              >
                Upload Photos
                <Form.Control type="file" />
              </span>
              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={"handleOnChange"}
                  value={state.email}
                  className="py-3"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={"handleOnChange"}
                  value={state.password}
                  className="py-3"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "200px" }}
                />
              </Form.Group>
              <div className="ms-auto d-flex justify-content-end">
                <Button className="mt-5" style={{ padding: "12px 30px" }}>
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
