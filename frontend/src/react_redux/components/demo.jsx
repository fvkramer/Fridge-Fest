import React, { Component } from 'react';
import '../../assets/css/demo.scss';

export default class Demo extends Component {
  render() {
    return (
      <div>
        Hello
        <video className="demo-video" autplay>
          <source src="../../assets/videos/lion.mp4" type="video/mp4" />
        </video>
        <img src="../../assets/images/background.jpg" alt="" />
      </div>
    );
  }
}
