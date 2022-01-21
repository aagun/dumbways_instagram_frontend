import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icons } from "../../../assets";
import { CommentIcon, MessageIcon } from "../../atoms";
import LikeIcon from "../../atoms/LikeIcon";
import "./style.css";

export default function DetailFeedModal(props) {
  const { selectedImage, setSelectedImage } = props;
  const comments = [
    {
      username: "rahul_",
      profilePicture: require("../../../assets/images/2.png"),
      comment: "Awsome!",
    },
    {
      username: "nguyen_mo",
      profilePicture: require("../../../assets/images/1.png"),
      comment: "Beatuiful place",
    },
  ];
  const posts = [
    {
      user: {
        username: "zayn",
        profilePicture: require("../../../assets/images/avatar/zayn.png"),
      },
      image: require("../../../assets/images/1.png"),
      likes: 1,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../../assets/images/avatar/zayn.png"),
      },
      image: require("../../../assets/images/4.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../../assets/images/avatar/zayn.png"),
      },
      image: require("../../../assets/images/2.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../../assets/images/avatar/zayn.png"),
      },
      image: require("../../../assets/images/5.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../../assets/images/avatar/zayn.png"),
      },
      image: require("../../../assets/images/3.png"),
      likes: 127321,
    },
    {
      user: {
        username: "zayn",
        profilePicture: require("../../../assets/images/avatar/zayn.png"),
      },
      image: require("../../../assets/images/7.png"),
      likes: 127321,
    },
  ];

  const {
    image,
    user: { username, profilePicture },
  } = posts[selectedImage - 1];

  const closeModal = (e) => {
    setSelectedImage(null);
    document
      .querySelector("body")
      .classList.remove("detail-feed-modal-container");
  };

  const handlerLikePost = () => {
    if (fill === "red") {
      setFill("none");
      return setStroke("gray");
    }
    setFill("red");
    return setStroke("red");
  };

  const [fill, setFill] = useState("none");
  const [stroke, setStroke] = useState("#ABABAB");
  return (
    <div className="detail-feed-modal-container">
      <div className="detail-feed-container">
        <div className="detail-feed-image">
          <img src={image} alt="" />
        </div>
        <div className="detail-feed-info pt-5">
          <button onClick={closeModal} className="close btn-secondary">
            X
          </button>
          <div className="description">
            <div className="bg-rainbow">
              <img src={profilePicture} alt={username} />
            </div>
            <div>
              <p>{username}</p>
              <p>What an awsome place!</p>
            </div>
          </div>
          <div className="comment-container">
            {comments.map((user, index) => {
              return (
                <div key={index} className="comment">
                  <div className="bg-rainbow">
                    <img src={user.profilePicture} alt={user.username} />
                  </div>
                  <div>
                    <p>{user.username}</p>
                    <p>{user.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ position: "absolute", bottom: 35, width: "21%" }}>
            <div className="action d-flex justify-content-end align-items-center mb-2">
              <Link to="" onClick={handlerLikePost} className="me-2">
                <LikeIcon fill={fill} stroke={stroke} />
              </Link>
              <Link to="" className="me-2">
                <CommentIcon />
              </Link>
              <Link to="/home/message" className="me-2">
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
