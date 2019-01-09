import React, { Component } from 'react';

import WaitingForPlayer from './lobbyComponents/loaded_players';
import LeaderBoard from './lobbyComponents/leaderboard';
import PlayersLoaded from './lobbyComponents/waiting_players';
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
            <h1>Fridge Fest Lobby</h1>
            <LeaderBoard />
            <WaitingForPlayer />
            <PlayersLoaded />
            <Chat />
          </div>
      </div>
    );
  }
}
