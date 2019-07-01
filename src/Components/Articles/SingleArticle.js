import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Api";
import Comments from "../Comments/Comments";
import VoteArticle from "./VoteArticle";

class SingleArticle extends Component {
  state = {
    article: {}
  };

  render() {
    const { article, article_id } = this.state;
    return (
      <div key={article.article_id} class="6u 12u$(medium)">
        <h3>{article.title}</h3>
        <h5>{article.body} </h5>
        Topic: {article.topic}
        <Link to={`/user/${article.author}`}>Author: {article.author}</Link>
        Created: {article.created_at}
        <VoteArticle article_id={article.article_id} votes={article.votes} />
        <Link to={`/${article.article_id}/comments/`}>
          {" "}
          <h5 article_id={article.article_id}>
            Comments: {article.comment_count}
          </h5>
        </Link>
        <Comments article_id={article.article_id} />
        <br />
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    api.getSingleArticle(article_id).then(article => {
      this.setState({ article: article });
    });
  }
}

export default SingleArticle;
