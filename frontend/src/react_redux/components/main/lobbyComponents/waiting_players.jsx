import React, { Component } from 'react';
import { connect } from 'react-redux';

const msp = state => ({
  players: state.session.activePlayers,
  length: state.session.activePlayers.length,
});

class WaitingForPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() { }

  render() {
    return (
      <div>
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
      {player}
      Has Joined The Game!
    </li>
  ));
  return (
    playerList
  );
};

export default connect(msp)(WaitingForPlayer);
