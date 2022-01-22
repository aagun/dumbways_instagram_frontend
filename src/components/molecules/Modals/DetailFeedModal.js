import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { FormControl, InputGroup } from "react-bootstrap";
import { LikeIcon, CommentIcon, MessageIcon } from "../../atoms";

export default function DetailFeedModal(props) {
  const { selectedImage, setSelectedImage, images } = props;

  // selected image as same as post when post clicked
  const { image, photo, username, caption, comment } =
    images[selectedImage - 1];

  const closeModal = () => {
    setSelectedImage(null);
    document
      .querySelector("body")
      .classList.remove("detail-feed-modal-container");
  };

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
              <img src={photo} alt={username} />
            </div>
            <div>
              <p>{username}</p>
              <p>{caption}</p>
            </div>
          </div>
          <div className="comment-container">
            {comment.map((user, index) => {
              return (
                <div key={index} className="comment">
                  <div className="bg-rainbow">
                    <img src={user.photo} alt={user.username} />
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
              <input type="checkbox" id={`cb${selectedImage - 1}`} />
              <label
              // htmlFor={`cb${selectedImage - 1}`}
              // onClick={() => {
              //   if (checked) {
              //     return setChecked(false);
              //   }
              //   setChecked(true);
              // }}
              >
                <LikeIcon fill={"none"} stroke={"gray"} />
              </label>
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
