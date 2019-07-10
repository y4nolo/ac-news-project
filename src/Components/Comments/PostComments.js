import React, { Component } from "react";
import * as api from "../Api";
import ErrorPage from "../ErrorPage";

class PostComments extends Component {
  state = {
    user: "jessjelly",
    body: "",
    error: null
  };
  render() {
    const { body, user, error } = this.state;
    if (error) return <ErrorPage error={error} />;

    return (
      <div>
        <form onSubmit={this.handlePostComment} className="row uniform">
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
        this.setState({ body: "" });
      })
      .catch(err => {
        this.setState({ error: err });
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
