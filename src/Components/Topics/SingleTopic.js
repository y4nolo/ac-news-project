import React, { Component } from "react";
import * as api from "../Api";
import ArticlesList from "../Articles/ArticlesList";

class SingleTopic extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div>
        <ArticlesList articles={this.state.articles} />
      </div>
    );
  }
  componentDidMount() {
    const { topic } = this.props;
    api.getAllArticles({ topic }).then(articles => {
      this.setState({ articles });
    });
  }
}

export default SingleTopic;
