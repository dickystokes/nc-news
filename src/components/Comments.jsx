import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "../components/CommentCard";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div className="comments">
        <h3>Comments</h3>
        <input id="add-comment" placeholder="Add Comment" />
        <span role="img" aria-label="postbox">
          &#128238;
        </span>
        <CommentCard comments={this.state.comments} />
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
