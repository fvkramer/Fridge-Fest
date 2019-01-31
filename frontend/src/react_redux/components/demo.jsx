import React, { Component } from 'react';

export default class Demo extends Component {
  render() {
    return (
      <div>
        Hello
        <video className="demo-video" style={videoStyle} autplay>
          <source src="https://www.youtube.com/watch?v=Y-DjIotfsKE&t=120s" type="video/mp4" />
        </video>
      </div>
    );
  }
}
