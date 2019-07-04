import React from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../Api";
import "./Article.css";
import ErrorPage from "../ErrorPage";

class Articles extends React.Component {
  state = {
    articles: [
      {
        article_id: 8,
        author: "cooljmessy",
        title: "Express.js: A Server-Side JavaScript Framework",
        topic: "coding",
        created_at: "2016-06-30T07:59:39.000Z",
        votes: 3,
        comment_count: "7"
        //delete later
      }
    ],
    order_by: "asc",
    sort_by: "created_at",
    page: 1,
    total_count: 0,
    error: null
  };

  render() {
    const { articles, page, total_count, error } = this.state;
    const maxPages = Math.ceil(total_count / 10) - 1;
    console.log({ total_count, maxPages });
    if (error) return <ErrorPage error={error} />;
    return (
      <div className="articles">
        <h2>Articles</h2>
        <div class="select-wrapper">
          <form className="menu">
            <label>
              Sort By:
              <select
                onChange={this.sortArticles}
                name="category"
                id="category"
              >
                <option value="created_at">Date Created</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">Votes</option>
              </select>
            </label>
          </form>
          <form>
            <label>
              Order By:
              <select
                onChange={this.OrderArticles}
                name="category"
                id="category"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </label>
          </form>
        </div>
        {/* https://www.npmjs.com/package/react-dropdown */}
        <>
          <ArticlesList articles={articles} />
        </>
        <button disabled={page === 1} onClick={() => this.changePage(-1)}>
          Prev
        </button>
        <button disabled={page === maxPages} onClick={() => this.changePage(1)}>
          Next
        </button>
      </div>
    );
  }

  changePage = direction => {
    this.setState(prevState => {
      return { page: prevState.page + direction };
    });
  };

  sortArticles = event => {
    this.setState({ sort_by: event.target.value });
  };

  OrderArticles = event => {
    this.setState({
      order_by: event.target.value
    });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const pageChange = prevState.page !== this.state.page;
    const topicChange = prevProps.topic !== this.props.topic;
    const sort_byChange = prevState.sort_by !== this.state.sort_by;
    const order_byChange = prevState.order_by !== this.state.order_by;
    if (topicChange || sort_byChange || order_byChange || pageChange) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    const { order_by, sort_by, page: p } = this.state;
    api
      .getAllArticles({ sort_by, order_by, p })
      .then(({ articles, total_count }) => {
        this.setState({ articles, error: null, total_count });
        //returns articles, with no errors and gets rid of loading message
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };
}

export default Articles;
