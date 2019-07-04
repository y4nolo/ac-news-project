import React, { Component } from "react";
import * as api from "../Api";
import ArticlesList from "../Articles/ArticlesList";
import ErrorPage from "../ErrorPage";
import "./Topics.css";
import "../Articles/Article.css";

class SingleTopic extends Component {
  state = {
    articles: [],
    err: null
  };
  render() {
    if (this.state.err) return <ErrorPage error={this.state.error} />;
    return (
      <div className="singleTopic">
        <ArticlesList className="listItem" articles={this.state.articles} />
      </div>
    );
  }
  componentDidMount() {
    const { topic } = this.props;
    api
      .getAllArticles({ topic })
      .then(({ articles }) => {
        this.setState({ articles, err: null });
      })
      .catch(err => {
        this.setState({ err });
      });
  }
}

export default SingleTopic;
