import React, { Component } from "react";
import * as api from "../Api";
import CommentsList from "./CommentsList";
import VoteComment from "./VoteComment";
// import { VoteComment } from "./VoteComment";

class SingleComment extends Component {
  state = {
    comments: [],
    voteChange: 0
  };
  render() {
    const { comment } = this.state;
    return (
      <div>
        <CommentsList comments={comments} />
      </div>
      <div>
 <VoteComment comment_id={comment_id} votes={vote}/>
      </div>
    );
  }

  componentDidMount() {
    api
      .getCommentByArticleId(this.props.article_id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
export default SingleComment;
