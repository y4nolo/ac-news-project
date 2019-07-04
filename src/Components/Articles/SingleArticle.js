import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Api";
import Comments from "../Comments/Comments";
import ErrorPage from "../ErrorPage";
import Voting from "../Voting";

class SingleArticle extends Component {
  state = {
    article: {},
    error: null
  };

  render() {
    const { article, error } = this.state;
    const { article_id } = this.props;
    if (error) return <ErrorPage error={error} />;

    return (
      <div
        key={article.article_id}
        className="articles
      "
      >
        <h3>{article.title}</h3>
        <h5>{article.body} </h5>
        Topic: {article.topic}
        <Link to={`/user/${article.author}`}>Author: {article.author}</Link>
        Created: {article.created_at}
        <Voting
          article_id={article.article_id}
          votes={article.votes}
          type={article}
        />
        <Link to={`/${article.article_id}/comments/`}>
          {" "}
          <h5 article_id={article.article_id}>
            Comments: {article.comment_count}
          </h5>
        </Link>
        <Comments username={this.props.username} article_id={article_id} />
        <br />
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    api
      .getSingleArticle(article_id)
      .then(article => {
        this.setState({ article: article });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }
}

export default SingleArticle;
