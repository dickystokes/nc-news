import React, { Component } from "react";
import "./css/CommentCard.css";
import * as api from "../api";

class CommentCard extends Component {
  state = {
    OptimisticVote: 0
  };
  render() {
    console.log(this.state);
    const { comments, user } = this.props;
    return (
      <div>
        {comments.map(comment => (
          <li key={comment.comment_id} className="comment">
            <b>{comment.author}</b>
            <br />
            {comment.body}
            <hr />
            <button
              onClick={e => {
                if (user === null || user.length === 0) {
                  window.confirm("Please log in");
                  this.setState({ OptimisticVote: 0 });
                } else if (this.state.OptimisticVote === -1) {
                  window.confirm("Stop being such a hater, we get it!");
                } else {
                  api
                    .changeCommentVote(-1, comment.comment_id)
                    .then(OptimisticVote => {
                      this.setState({
                        OptimisticVote: this.state.OptimisticVote - 1,
                        comment_id: comment.comment_id
                      });
                    });
                }
              }}
            >
              <span role="img" aria-label="thumbs-down">
                &#128078;
              </span>
            </button>
            Votes:{" "}
            {comment.votes +
              (comment.comment_id === this.state.comment_id
                ? this.state.OptimisticVote
                : 0)}
            <button
              onClick={e => {
                if (user === null || user.length === 0) {
                  window.confirm("Please log in");
                  this.setState({ OptimisticVote: 0 });
                } else if (this.state.OptimisticVote === 1) {
                  window.confirm("You have already spread the love!");
                } else {
                  api
                    .changeCommentVote(1, comment.comment_id)
                    .then(OptimisticVote => {
                      this.setState({
                        OptimisticVote: this.state.OptimisticVote + 1,
                        comment_id: comment.comment_id
                      });
                    });
                }
              }}
            >
              <span role="img" aria-label="thumbs-up">
                &#128077;
              </span>
            </button>
          </li>
        ))}
      </div>
    );
  }
}

export default CommentCard;
