import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "../components/CommentCard";

class Comments extends Component {
  state = {
    comments: [],
    Newcomment: []
  };
  render() {
    const { user } = this.props;
    console.log(this.state);
    let storedMessage = "";
    JSON.parse(localStorage.getItem("comment")) !== null
      ? (storedMessage = JSON.parse(localStorage.getItem("comment")).value)
      : (storedMessage = "");

    return (
      <div className="comments">
        <h3>Comments</h3>
        {user === null || user.length === 0 ? (
          <>
            <textarea
              rows="1"
              cols="50"
              id="addComment"
              placeholder="Log in to add comments"
              onChange={this.handleInvalidComment}
            />
            <button
              onClick={e => {
                if (user.length === 0) {
                  window.confirm("Please log in");
                }
              }}
            >
              <span role="img" aria-label="postbox">
                &#128238;
              </span>
            </button>
          </>
        ) : (
          <p>
            <textarea
              rows="1"
              cols="50"
              id="addComment"
              placeholder="Type your comment here..."
              onChange={this.handleValidComment}
            >
              {storedMessage}
            </textarea>
            <button onClick={this.sendComment}>
              <span role="img" aria-label="postbox">
                &#128238;
              </span>
            </button>
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

  handleInvalidComment = e => {
    const { value } = e.target;
    localStorage.setItem("comment", JSON.stringify({ value }));
  };

  handleValidComment = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  sendComment = async () => {
    api.postComment(
      this.props.article_id,
      this.props.user[0].username,
      this.state.addComment
    );
    await this.componentDidMount();
  };
}

export default Comments;
