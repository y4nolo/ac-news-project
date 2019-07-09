import React, { Component } from "react";
import * as api from "./Api";

class VoteComment extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div className="voting">
        <p> votes:{votes + voteChange}</p>
        <button
          role="img"
          aria-labelledby="votingButton"
          onClick={() => this.handleVote(1)}
          disabled={voteChange > 0}
        >
          <span role="img" aria-labelledby="upVote">
            🔺
          </span>
        </button>
        <button onClick={() => this.handleVote(-1)} disabled={voteChange < 0}>
          <span role="img" aria-labelledby="downVote">
            🔻
          </span>
        </button>
      </div>
    );
  }
  handleVote = increment => {
    const { id, type } = this.props;
    api
      .modifyVotes(id, increment, type)
      .then(updatedComment => {
        this.setState(prevState => {
          return {
            voteChange: prevState.voteChange + increment
          };
        });
      })
      .catch(err => {
        this.setState(({ voteChange }) => ({
          voteChange: voteChange - increment
        }));
      });
  };
}

export default VoteComment;
