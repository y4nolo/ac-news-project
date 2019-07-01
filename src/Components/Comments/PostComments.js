import React, { Component } from "react";
import * as api from "../Api";

class PostComments extends Component {
  state = {
    user: "jessjelly",
    body: ""
  };
  render() {
    const { body, user } = this.state;
    return (
      <div>
        <form
          onSubmit={this.handlePostComment}
          class="row uniform"
          className="postcomment"
        >
          <p>Post comment as {`${user}`}:</p>
          <textarea
            value={body}
            name="body"
            onChange={this.handleChange}
            placeholder="Say Something..."
          />
          <br />
          <button>Comment</button>
        </form>
      </div>
    );
  }

  handlePostComment = event => {
    event.preventDefault();
    const { article_id } = this.props;
    const { body, user } = this.state;
    api
      .postNewComment({ article_id, user, body })
      .then(comment => {
        this.props.displayNewComment(comment);
        // navigate(`/articles/${article_id}/comments`);
        this.setState({ body: "" });
      })
      .catch(err => {
        console.dir(err);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
}

export default PostComments;
