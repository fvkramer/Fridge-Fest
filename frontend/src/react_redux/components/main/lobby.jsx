import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import WaitingForPlayer from './lobbyComponents/waiting_players';
import LeaderBoard from './lobbyComponents/leaderboard';
import PlayersLoaded from './lobbyComponents/loaded_players';
import Chat from './lobbyComponents/chat';

import { setupGameSockets } from '../../../game/sockets/sockets';

// css
import '../../../assets/css/lobby.scss';

export default class Lobby extends Component {
  // componentDidMount() {
  //   // setupGameSockets(window.store);
  // }

  handleGame(e) {
    window.startGame();
  }

  render() {
    // if (!window.socket) {
    //   return <Redirect to="/" />;
    // }

    return (
      <div className="lobby-container">
        <div className="lobby-components">
          <div className="lobby-header">
            <h1 className="ff-lobby-header">Fridge Fest Lobby</h1>
          </div>
          <div className="player-waiting">
            <WaitingForPlayer />
          </div>
          <div className="right-lobby-pos">
            <div className="right-lobby-leader">
              <Link to="/game"><button id="start-button" onClick={this.handleGame}>Start Game</button></Link>
              <LeaderBoard />
            </div>
            <div className="right-lobby">
              <PlayersLoaded />
              <Chat />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
