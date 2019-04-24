import React from "react";
import "./css/CommentCard.css";

function CommentCard({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <p key={comment.comment_id} className="comment">
          <b>{comment.author}</b>
          <br />
          {comment.body} <br />
          Votes: {comment.votes}
          <button>Agreed</button>
          <button>You're wrong!</button>
        </p>
      ))}
    </div>
  );
}

export default CommentCard;
