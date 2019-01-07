import React, { Component } from 'react';
import WaitingForPlayer from './lobbyComponents/waiting_players';
import LeaderBoard from './lobbyComponents/leaderboard';
import PlayersLoaded from './lobbyComponents/loaded_players';
import Chat from './lobbyComponents/chat';

export default class lobby extends Component {
  componentDidMount() { }

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
