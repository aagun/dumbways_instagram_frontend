import "./style.css";
import React from "react";
import { Row, Col, Image } from "react-bootstrap/";
import { Link } from "react-router-dom";
import { ProfilePicture } from "../../atoms";
import { UserInsight } from "..";
import { Icons } from "../../../assets";

export default function UserProfile(props) {
  let { profile, params } = props;
  return (
    <>
      <Row className="profile mt-3">
        <div className="d-flex flex-column align-items-center mt-5">
          {!params && (
            <Link to="/edit-profile" className="ms-auto me-5 mb-4">
              <Image src={Icons.Edit} />
            </Link>
          )}
          <ProfilePicture
            isLarge
            dataImage={{ src: profile.image, alt: profile.username }}
          />
          <span className="profile-name mb-1">{profile.fullName}</span>
          <span className="profile-username mb-5">@{profile.username}</span>
          {params && (
            <Col className="mb-5">
              <Link to="/inbox" className="btn btn-primary ms-3 fs-6">
                Message
              </Link>
              <Link to="/unfollow" className="btn btn-dark ms-3 fw-bold fs-6">
                Unfollow
              </Link>
            </Col>
          )}
          <UserInsight insight={profile.insight} />
          <div className="w-100 px-5">
            <p className="bio">{profile.bio}</p>
          </div>
        </div>
      </Row>
    </>
  );
}
