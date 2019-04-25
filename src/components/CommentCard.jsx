import React from "react";
import "./css/CommentCard.css";

function CommentCard({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <li key={comment.comment_id} className="comment">
          <b>{comment.author}</b>
          <br />
          {comment.body}
          <hr />
          Votes: {comment.votes}
          <span role="img" aria-label="thumbs-up">
            &#128077;
          </span>
          <span role="img" aria-label="thumbs-down">
            &#128078;
          </span>
        </li>
      ))}
    </div>
  );
}

export default CommentCard;
