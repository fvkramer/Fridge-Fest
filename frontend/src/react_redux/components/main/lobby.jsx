import React, { Component } from 'react';

import WaitingForPlayer from './lobbyComponents/waiting_players';
import LeaderBoard from './lobbyComponents/leaderboard';
import PlayersLoaded from './lobbyComponents/loaded_players';
import Chat from './lobbyComponents/chat';

import { setupGameSockets } from '../../../game/sockets/sockets';

export default class Lobby extends Component {
  componentDidMount() {
    // debugger;
    setupGameSockets(window.store);
  }

  render() {
    return (
      <div>
        <WaitingForPlayer />
        <LeaderBoard />
        <PlayersLoaded />
        <Chat />
      </div>
    );
  }
}
