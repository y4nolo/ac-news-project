import React from "react";
import { Link } from "@reach/router";
import DeleteComment from "./DeleteComment";
import VoteComment from "./VoteComment";

function CommentsList({ comments, displayRefreshedComments }) {
  return comments.map(comment => {
    return (
      <div key={comment.comment_id} className="listItem">
        <h4>Comment: </h4>
        <h5> {comment.body}</h5>
        <h5>
          <Link to={`/user/${comment.author}`}>Author: {comment.author}</Link>
        </h5>

        <h5>Posted at: {comment.created_at} </h5>
        <br />
        <DeleteComment
          comment_id={comment.comment_id}
          displayRefreshedComments={displayRefreshedComments}
        />
        <VoteComment comment_id={comment.comment_id} votes={comment.votes} />
      </div>
    );
  });
}

export default CommentsList;
