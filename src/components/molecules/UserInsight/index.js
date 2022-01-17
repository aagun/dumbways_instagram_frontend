import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function UserInsight(props) {
  const { user } = props;
  return (
    <Container fluid>
      <Row className="insight">
        <Col>
          <p className="text-muted">Posts</p>
          <p className="text-white">{user.posts}</p>
        </Col>
        <Col>
          <p className="text-muted">Followers</p>
          <p className="text-white">{user.followers}M</p>
        </Col>
        <Col className="me-4">
          <p className="text-muted">Following</p>
          <p className="text-white">{user.following}</p>
        </Col>
      </Row>
    </Container>
  );
}
