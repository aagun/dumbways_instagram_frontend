import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
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

  console.log(posts[selectedImage]);
  console.log(selectedImage);
  console.log(posts[0]);
  console.log(posts[selectedImage]);
  const {
    image,
    user: { username, profilePicture },
  } = posts[selectedImage - 1];

  const closeModal = (e) => {
    setSelectedImage(null);
    document.querySelector("body").classList.remove("global-modal-containeron");
  };

  return (
    <div className="global-modal-container" onClick={closeModal}>
      <div className="all-modalItems-container">
        <div className="modal-container-detail">
          <img className="modal-element" src={image} alt="" />
        </div>
        <div className="PhotosInfoModal pt-5">
          <button
            onClick={closeModal}
            className="btn-secondary"
            style={{ position: "absolute", right: "14.6%", top: "2.5%" }}
          >
            X
          </button>
          <div className="description">
            <img
              src={profilePicture}
              alt={username}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: "3px solid transparent",
              }}
              className="bg-rainbow"
            />
            <div>
              <p>{username}</p>
              <p>What an awsome place!</p>
            </div>
          </div>

          <div className="comment-container">
            {comments.map((user, index) => {
              return (
                <div key={index} className="tag-container">
                  <img
                    src={user.profilePicture}
                    alt={user.username}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: "3px solid transparent",
                    }}
                    className="bg-rainbow"
                  />
                  <div>
                    <p>{user.username}</p>
                    <p>{user.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ position: "absolute", bottom: 35, width: "21%" }}>
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
