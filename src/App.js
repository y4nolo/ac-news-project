import React from "react";
import { Router } from "@reach/router";
import "./css/main.css";

import Header from "./Components/Header";
import NavBar from "./Components/NavBar";

import Banner from "./Components/Banner";

import Articles from "./Components/Articles/Articles";
import SingleArticle from "./Components/Articles/SingleArticle";
import Topics from "./Components/Topics/Topics";
import User from "./Components/User/User";
import Comments from "./Components/Comments/Comments";
import SingleTopic from "./Components/Topics/SingleTopic";
import UserArticles from "./Components/User/UserArticles";
import Footer from "./Components/Footer";

class App extends React.Component {
  state = {
    topics: null,
    isLogin: null,
    votes: 0,
    loggedInUser: "jessjelly",
    username: "jessjelly",
    avatar_url:
      "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
    name: "Jess Jelly"
  };
  render() {
    const { user, username, topics, article_id } = this.state;
    return (
      <div className="App">
        <Header username={username} />
        <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Banner />

        <Router>
          <Articles path="/" />
          <SingleArticle path="/:article_id" username={this.state.username} />

          <Topics path="/topics" topics={topics} />
          <SingleTopic path="/topics/:topic" />

          <User path="/user/:username" user={user} />
          <UserArticles path="/author/:user" />

          <Comments
            path="/:article_id/comments"
            article_id={article_id}
            user={user}
            username={username}
          />
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;
