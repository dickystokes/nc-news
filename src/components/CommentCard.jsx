import React from "react";
import "./css/CommentCard.css";

function CommentCard({ comments }) {
  console.log(comments);
  return (
    <div>
      {comments.map(comment => (
        <p className="comment">{comment.body}</p>
      ))}
    </div>
  );
}

export default CommentCard;
