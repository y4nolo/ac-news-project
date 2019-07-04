import React from "react";
import { Link } from "@reach/router";
import Voting from "../Voting";

function ArticlesList({ articles }) {
  return (
    <div>
      {articles.map(article => {
        return (
          <div key={article.article_id} className="listItem">
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
              <Voting
                id={article.article_id}
                type="articles"
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
