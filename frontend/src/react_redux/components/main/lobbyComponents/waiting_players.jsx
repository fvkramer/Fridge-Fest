import React, { Component } from 'react';
import { connect } from 'react-redux';

const msp = state => ({
  players: state.session.activePlayers,
});

class WaitingForPlayer extends Component {
  componentDidMount() { }

  render() {
    return (
      <div />
    );
  }
}

export default connect(msp)(WaitingForPlayer);
