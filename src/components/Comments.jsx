import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "../components/CommentCard";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { user } = this.props;
    return (
      <div className="comments">
        <h3>Comments</h3>
        {user.length === 0 ? (
          <>
            <textarea
              rows="4"
              cols="50"
              id="add-comment"
              placeholder="Log in to add comments"
            />
            <span
              role="img"
              aria-label="postbox"
              onClick={e => {
                if (user.length === 0) {
                  window.confirm("Please log in");
                }
              }}
            >
              &#128238;
            </span>
          </>
        ) : (
          <p>
            <textarea
              rows="4"
              cols="50"
              id="add-comment"
              placeholder="Type your comment here..."
            />
            <span role="img" aria-label="postbox">
              &#128238;
            </span>
          </p>
        )}
        <CommentCard comments={this.state.comments} user={user} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchComments(this.props.article_id);
  }

  fetchComments = article_id => {
    api
      .getComments(article_id)
      .then(comments => {
        this.setState({
          comments
        });
      })
      .catch(console.log, "<--this is an error");
  };
}

export default Comments;
