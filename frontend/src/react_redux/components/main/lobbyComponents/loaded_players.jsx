import React, { Component } from 'react';
import { connect } from 'react-redux';

const msp = state => ({
  players: state.session.activePlayers,
  length: state.session.activePlayers.length,
});


class PlayersLoaded extends Component {
  componentDidMount() { }

  render() {
    return (
      <div className="players-loaded-container">
        {/* Loaded Players Component */}
        <h2 className="players-header">Players In Lobby:</h2>
        <ul id="receivedPlayers">
          <ActivePlayers players={this.props.players} />
        </ul>
      </div>
    );
  }
}

const ActivePlayers = ({ players }) => {
  const playerList = players.map(player => (
    <li>
      A New Player Has Joined The Game! Greet them in Chat!
    </li>
  ));
  return (
    playerList
  );
};

export default connect(msp)(PlayersLoaded);
