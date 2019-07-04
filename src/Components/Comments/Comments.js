import React, { Component } from "react";
import * as api from "../Api";
import CommentsList from "./CommentsList";
import PostComments from "./PostComments";
import ErrorPage from "../ErrorPage";

class Comments extends Component {
  state = {
    comments: [],
    error: null
  };
  render() {
    const { comments, error } = this.state;
    const { article_id } = this.props;
    if (error) return <ErrorPage error={error} />;

    return (
      <div>
        <h2> Comments</h2>
        <CommentsList
          comments={comments}
          displayRefreshedComments={this.displayRefreshedComments}
          username={this.props.username}
        />
        <PostComments
          article_id={article_id}
          displayNewComment={this.displayNewComment}
        />
        <div />
      </div>
    );
  }

  displayNewComment = comment => {
    this.setState(prevState => {
      return { comments: [...prevState.comments, comment] };
    });
  };
  //if commentID matched a comment being filtered then return comments to new array
  displayRefreshedComments = comment_id => {
    this.setState(prevState => {
      const comments = prevState.comments.filter(comment => {
        return comment.comment_id !== comment_id;
      });
      return { comments };
    });
  };

  componentDidMount() {
    api
      .getCommentByArticleId(this.props.article_id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }
}

export default Comments;
