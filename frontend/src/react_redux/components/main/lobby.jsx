import React, { Component } from 'react';
import WaitingForPlayer from './waiting_players';
import LeaderBoard from './leaderboard';
import PlayersLoaded from './loaded_players';
import Chat from './chat';

export default class lobby extends Component {
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
