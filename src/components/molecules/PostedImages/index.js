import React from "react";
import "./style.css";
import Masonry from "react-masonry-css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImagesForLandingPage as Hero } from "../../../assets";
import { CommentIcon, LikeIcon, MessageIcon } from "../../atoms";

export default function PostedImages(props) {
  let { feeds, isFeed, isHero, setSelectedImage, checked, setChecked } = props;

  const handleDetailFeedModal = (feedId) => {
    const feed = feeds.find((feed_) => feed_.id === feedId);
    setSelectedImage({ ...feed });
  };
  return (
    <>
      <Masonry
        breakpointCols={{ default: 3, 1200: 3, 1000: 2, 700: 1 }}
        className={isHero ? "my-masonry-grid" : "masonry-grid"}
        columnClassName={
          isHero ? "my-masonry-grid_column" : "masonry-grid_column"
        }
      >
        {isHero
          ? Hero.map((feed, index) => {
              return (
                <div key={index}>
                  <img src={feed} alt="hero" />
                </div>
              );
            })
          : feeds.map((feed, index) => {
              return (
                <div key={index}>
                  <img
                    src={feed.image}
                    alt={index}
                    onClick={() => handleDetailFeedModal(feed.id)}
                  />
                  {isFeed && (
                    <Row className="mt-3">
                      <Col md={6}>
                        <div className="d-flex align-items-center">
                          <div
                            className="profile-background"
                            onClick={() => handleDetailFeedModal(index)}
                          >
                            <img
                              src={feed.photo}
                              alt={feed.fullName + "profile_picture"}
                              className="profile-image-sm"
                            />
                          </div>
                          <span
                            className="profile-name-sm"
                            onClick={() => handleDetailFeedModal(index)}
                          >
                            {feed.username}
                          </span>
                        </div>
                      </Col>
                      <Col
                        md={6}
                        className="d-flex justify-content-end align-items-center"
                      >
                        <div className="me-2">
                          <input type="checkbox" id={`cb${feed.id}`} />
                          <label htmlFor={`cb${feed.id}`}>
                            <LikeIcon fill={"none"} stroke={"#ABABAB"} />
                          </label>
                        </div>
                        <Link to="" className="me-2">
                          <CommentIcon />
                        </Link>
                        <Link to="/home/message" className="me-2">
                          <MessageIcon />
                        </Link>
                      </Col>
                      <span
                        className="text-end text-muted my-3"
                        style={{ fontSize: "18px" }}
                      >
                        {feed.like.toLocaleString()} Likes
                      </span>
                    </Row>
                  )}
                </div>
              );
            })}
      </Masonry>
    </>
  );
}
