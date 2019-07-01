import React from "react";
import { Link } from "@reach/router";
import VoteArticle from "./VoteArticle";

function ArticlesList({ articles }) {
  return (
    <div>
      {articles.map(article => {
        return (
          <div key={articles.article_id} className="listItem">
            <Link to={`/${article.article_id}`}>
              <h3> {article.title}</h3>
            </Link>

            <h5>Topic: {article.topic}</h5>
            <h5>
              Author:
              <Link to={`/user/${article.author}`}>{article.author}</Link>{" "}
            </h5>
            <h5>Created: {article.created_at}</h5>
            <h5>Comments: {article.comment_count}</h5>

            <div>
              <VoteArticle
                article_id={article.article_id}
                votes={article.votes}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ArticlesList;
