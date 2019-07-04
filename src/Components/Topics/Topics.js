import React from "react";
import TopicsList from "./TopicsList";
import * as api from "../Api";

import ErrorPage from "../ErrorPage";

class Topics extends React.Component {
  state = {
    topics: [],
    error: null
  };

  render() {
    const { topics, error } = this.state;
    if (error) return <ErrorPage error={error} />;

    return (
      <div>
        <h2> Topics</h2>
        <div>{topics && <TopicsList topics={topics} />}</div>
      </div>
    );
  }

  componentDidMount() {
    api
      .getAllTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }
}

export default Topics;
