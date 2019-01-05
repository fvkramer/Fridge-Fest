import React, { Component } from 'react';
import connect from 'react-redux';
import '../../../assets/css/overlay.css';


// const msp = state => ({
//   food: state.game.fridges
// })

export default class FoodPyramid extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="food-container">
        <div className="food-container-subclass">Instant Ramen</div>
        <div className="food-container-subclass">Milk Shake</div>
        <div className="food-container-subclass">Snickers</div>
        <div className="food-container-subclass">Donut</div>
        <div className="food-container-subclass">Pizza</div>
      </div>
    );
  }
}

// export default connect(msp)(FoodPyramid);
