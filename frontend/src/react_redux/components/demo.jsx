import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/demo.scss';

export default class Demo extends Component {
  render() {
    return (
      <div className="demo-div">

        <h1 className="demo-title">Demo Video</h1>

        <iframe className="vid" width="645" height="400" src="https://www.youtube.com/embed/UXHIhfwP4Iw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

        <Link to="/"><button className="home-button">Home</button></Link>
      </div>
    );
  }
}
