import React from "react";
import "./post.css";
const PostCard = (props) => {
  return (
    <>
      <div className="client-prof">
        {props.userImage}
        <div className="post-card-description">

        <p className="ownwers-disp"> {props.storiesDisp}</p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
