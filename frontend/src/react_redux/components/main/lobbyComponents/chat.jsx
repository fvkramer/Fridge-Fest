import React, { Component } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';


const msp = state => ({
  messages: state.messages,
});

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.socket = io('localhost:5000');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault('');
    this.socket.emit('chat message', [this.socket.id, this.state.message]);
    this.setState({ message: '' });
  }

  render() {
    return (
      <div>
        Chat Component
        <ul id="messages" />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} id="messages" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default connect(msp)(Chat);
