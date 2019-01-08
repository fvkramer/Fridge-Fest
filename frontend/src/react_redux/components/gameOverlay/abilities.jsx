import React, { Component } from 'react';
import { connect } from 'react-redux';


const msp = state => ({
  currentFridge: state.game.fridges[window.socket.id],
});

class Abilities extends Component {
  componentDidMount() {
  }

  render() {
    const { currentFridge } = this.props;

    if (currentFridge) {
      if (Object.keys(currentFridge.skill).length >= 1) {
        return (
          <div className="abilities-container">
            <img className="ability-sprite" src={currentFridge.skill.src} alt="" />
          </div>
        );
      }
      return <div className="abilities-container" />;
    }

    return <div className="abilities-container" />;
  }
}


export default connect(msp)(Abilities);
