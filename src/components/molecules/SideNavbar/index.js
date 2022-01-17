import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icons } from "../../../assets";

export default function SideNavbar() {
  return (
    <div className="side-navbar">
      <Row>
        <Link className="btn" to="/home/feed">
          <img src={Icons.Home} alt="home_icon" /> Feed
        </Link>
        <Link className="btn" to="/home/explore">
          <img src={Icons.Compass} alt="explore_icon" />
          Explore
        </Link>
      </Row>
      <Row>
        <Link className="btn" to="/">
          <img src={Icons.Exit} alt="logout_icon" />
          Logout
        </Link>
      </Row>
    </div>
  );
}
