import React, { Component } from 'react';

import WaitingForPlayer from './lobbyComponents/waiting_players';
import LeaderBoard from './lobbyComponents/leaderboard';
import PlayersLoaded from './lobbyComponents/loaded_players';
import Chat from './lobbyComponents/chat';

import { setupGameSockets } from '../../../game/sockets/sockets';

// css
import '../../../assets/css/lobby.scss';

export default class Lobby extends Component {
  componentDidMount() {
    setupGameSockets(window.store);
  }

  render() {
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
            <LeaderBoard />

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
