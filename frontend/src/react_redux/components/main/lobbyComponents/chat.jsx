import React, { Component } from 'react';
import { connect } from 'react-redux';


const msp = state => ({
  messages: state.messages.messageList,
  length: state.messages.messageList.length,
});

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault('');

    window.socket.emit('chat message', [window.socket.id, this.state.message]);
    // window.socket.emit('chat message', this.state.message);
    this.setState({ message: '' });
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="chat-container">
        {/* Chat Component */}
        <ul id="messages">
          <Messages messages={messages} />
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.message} />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

const Messages = ({ messages }) => {
  const messageList = messages.map(message => <li className="individual-msg">{message[1]}</li>);
  return messageList;
};

export default connect(msp)(Chat);
