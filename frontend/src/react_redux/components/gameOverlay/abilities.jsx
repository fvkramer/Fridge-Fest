import React, { Component } from 'react';
import { connect } from 'react-redux';


const msp = state => ({
  skill: state.game.fridges[window.socketId].skills,
});

class Abilities extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="abilities-container" />
    );
  }
}


export default connect(msp)(Abilities);
