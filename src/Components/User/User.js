import React, { Component } from "react";
import * as api from "../Api";
import ErrorPage from "../ErrorPage";
import "./User.css";

class User extends Component {
  state = { user: [], articles: [], error: null };

  render() {
    const { user, error } = this.state;
    if (error) return <ErrorPage error={error} />;

    return (
      <div className="user">
        <img src={`${user.avatar_url}`} alt="profile" />
        <h2>User: {user.username}</h2>
        <h3>Name: {user.name}</h3>
      </div>
    );
  }
  componentDidMount() {
    const { username } = this.props;
    api
      .getUserByUserNameId(username)
      .then(user => {
        this.setState({ user: user });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }
}
export default User;
