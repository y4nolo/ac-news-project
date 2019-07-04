import React, { Component } from "react";
import * as api from "../Api";
import CommentsList from "./CommentsList";
import VoteComment from "./VoteComment";
// import { VoteComment } from "./VoteComment";
import ErrorPage from '../ErrorPage'

class SingleComment extends Component {
  state = {
    comments: [],
    voteChange: 0,
    error: null
  }
  render() {
    const { comment, error } = this.state;
    if (error) return <ErrorPage error={error} />;

    return (
      <div>
        <CommentsList comments={comments} />
      </div>
      <div>
        <VoteComment comment_id={comment_id} votes={vote} />
      </div>
    )
  
  }


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
export default SingleComment;
