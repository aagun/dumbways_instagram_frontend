import "./style.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormControl, InputGroup } from "react-bootstrap";
import { LikeIcon, CommentIcon, MessageIcon } from "../../atoms";
import { user } from "../../../fakeData";

export default function DetailFeedModal(props) {
  const { selectedImage, setSelectedImage } = props;
  let [feed, setFeed] = useState({});

  // selected image as same as post when post clicked
  useEffect(() => {
    setFeed({ ...selectedImage });
  }, []);

  const closeModal = () => {
    setSelectedImage(null);
    document
      .querySelector("body")
      .classList.remove("detail-feed-modal-container");
  };

  const handleLikeDetailFeed = () => {
    if (feed.like) {
      feed.like = false;
      return console.log(feed.like);
    }
    feed.like = true;
  };

  const navigate = useNavigate();
  return (
    <div className="detail-feed-modal-container">
      <div className="detail-feed-container">
        <div className="detail-feed-image">
          <img src={feed.image} alt="" />
        </div>
        <div className="detail-feed-info pt-5">
          <button onClick={closeModal} className="close btn-secondary">
            X
          </button>
          <div className="description">
            <div
              className="bg-rainbow"
              onClick={() => {
                navigate("/feed/" + feed.username);
              }}
              style={{ cursor: "pointer" }}
            >
              <img src={feed.photo} alt={feed.username} />
            </div>
            <div>
              <p
                onClick={() => {
                  navigate("/feed/" + feed.username);
                }}
                style={{ cursor: "pointer" }}
              >
                {feed.username}
              </p>
              <p>{feed.caption}</p>
            </div>
          </div>
          <div className="comment-container">
            {selectedImage.comment.map((item, index) => {
              return (
                <div
                  key={index}
                  className="comment"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/feed/" + item.username);
                  }}
                >
                  <div className="bg-rainbow">
                    <img src={item.photo} alt={item.username} />
                  </div>
                  <div>
                    <p>{item.username}</p>
                    <p>{item.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ position: "absolute", bottom: 35, width: "21%" }}>
            <div className="action d-flex justify-content-end align-items-center mb-2">
              <input
                type="checkbox"
                id={`cbdf${selectedImage.id}`}
                defaultChecked={selectedImage.like}
              />
              <label
                style={{ marginRight: "0.8rem" }}
                htmlFor={`cbdf${selectedImage.id}`}
                onClick={() => {
                  if (selectedImage.like) {
                    selectedImage.like = false;
                    return console.log(selectedImage);
                  }
                  selectedImage.like = true;
                }}
              >
                <LikeIcon fill={"none"} stroke={"gray"} />
              </label>
              <Link to="" className="me-2">
                <CommentIcon />
              </Link>
              <Link to="/home/message" className="me-3">
                <MessageIcon />
              </Link>
            </div>
            <p
              className="text-end text-muted me-2 likes"
              style={{ fontSize: "18px" }}
            >
              127,123 Likes
            </p>
            <InputGroup className="d-flex w-100">
              <FormControl
                type="text"
                placeholder="Comment ..."
                className="me-2"
                aria-label="Comment"
              />
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
