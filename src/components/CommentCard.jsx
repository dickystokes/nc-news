import React from "react";
import "./css/CommentCard.css";

function CommentCard({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <p key={comment.comment_id} className="comment">
          <b>{comment.author}</b>
          <br />
          {comment.body} <hr />
          Votes: {comment.votes}
          <button>
            <i class="em em---1" />
          </button>
          <button>
            <i class="em em--1" />
          </button>
        </p>
      ))}
    </div>
  );
}

export default CommentCard;
