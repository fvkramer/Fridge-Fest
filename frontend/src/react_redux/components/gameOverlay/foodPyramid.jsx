import React, { Component } from 'react';
import connect from 'react-redux';
import '../../../css/overlay.css';


// const msp = state => ({
//   food: state.game.fridges
// })

export default class FoodPyramid extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="food-container">
        Food Pyramid Container
      </div>
    );
  }
}

// export default connect(msp)(FoodPyramid);
