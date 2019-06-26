import React from "react";
import { Link } from "@reach/router";

function ArticlesList({ articles }) {
  return (
    <div>
      {articles.map(article => {
        return (
          <div key={articles.article_id} className="listItem">
            <Link to={`/${article.article_id}`}>
              <h2> {article.title}</h2>
            </Link>
            Topic: {article.topic}
            Author:
            <Link to={`/user/${article.author}`}>{article.author}</Link>
            Created: {article.created_at}
            <Link to={`/${article.article_id}/comments`}>
              Comments: {article.comment_count}{" "}
            </Link>
            Votes: {article.votes}
            <br />
            <br />
            <div>
              <button onClick={() => this.handleVote(1)}> 🔺 </button>
              <button onClick={() => this.handleVote(-1)}> 🔻 </button>
            </div>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );

  /*handleVote =(increment) => {
    patchArticle (this.props.article_id, 1 ).then(updatedArticle =>{
    this.setState((prevState) => {
    return {votes: prevState.votes + increment
    })}
    })}*/
}
export default ArticlesList;
