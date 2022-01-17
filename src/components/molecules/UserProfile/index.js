import "./style.css";
import React from "react";
import { Row, Col, Image } from "react-bootstrap/";
import { Link } from "react-router-dom";
import { ProfilePicture } from "../../atoms";
import { UserInsight } from "..";
import { Icons } from "../../../assets";
import MessageModal from "../Modals/MessageModal";

export default function UserProfile(props) {
  let {
    user: { user, params },
    show,
    setShow,
    message,
    setMessage,
  } = props;

  return (
    <>
      <Row className="profile mt-3">
        <div className="d-flex flex-column align-items-center mt-5">
          {!params && (
            <Link to="/home/edit-profile" className="ms-auto me-5 mb-4">
              <Image src={Icons.Edit} />
            </Link>
          )}
          <ProfilePicture
            isLarge
            dataImage={{ name: user.name, image: user.profilePicture }}
          />
          <span className="profile-name mb-1">{user.name}</span>
          <span className="profile-username mb-5">@{user.username}</span>
          {params && (
            <Col className="mb-5">
              <Link to="/home/message" className="btn btn-primary ms-3 fs-6">
                Message
              </Link>
              <Link to="/unfollow" className="btn btn-dark ms-3 fw-bold fs-6">
                Unfollow
              </Link>
            </Col>
          )}
          <UserInsight user={user} />
          <div className="w-100 px-5">
            <p className="bio">{user.bio}</p>
          </div>
        </div>
      </Row>
      <MessageModal
        show={show}
        setShow={setShow}
        message={message}
        setMessage={setMessage}
      />
    </>
  );
}
