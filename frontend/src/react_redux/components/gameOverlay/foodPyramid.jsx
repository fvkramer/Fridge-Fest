import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/overlay.css';


const msp = state => ({
  currentFridge: state.game.fridges[window.socketId],
});

function FridgeUndefinedContainer() {
  return (
    <div className="food-container">
      <div className="food-container-subclass">
        <div>Instant Ramen 0</div>
      </div>
      <div className="food-container-subclass">
        <div>Milk Shake 0</div>
      </div>
      <div className="food-container-subclass">
        <div>Snickers 0</div>
      </div>
      <div className="food-container-subclass">
        <div>Donut 0</div>
      </div>
      <div className="food-container-subclass">
        <div>Pizza 0</div>
      </div>
    </div>
  );
}

function FridgeDefinedContainer(props) {
  return (
    <div className="food-container">
      <div className="food-container-subclass">
        <div>{`Instant Ramen ${props.currentFridge.instantRamen}`}</div>
      </div>
      <div className="food-container-subclass">
        <div>Milk Shake</div>
      </div>
      <div className="food-container-subclass">
        <div>Snickers</div>
      </div>
      <div className="food-container-subclass">
        <div>Donut</div>
      </div>
      <div className="food-container-subclass">
        <div>Pizza</div>
      </div>
    </div>
  );
}

class FoodPyramid extends Component {
  componentDidMount() {
  }

  render() {
    const { currentFridge } = this.props;

    if (currentFridge) {
      console.log(currentFridge.instantRamen);
    }

    if (currentFridge) {
      return (
        <FridgeDefinedContainer currentFridge={currentFridge} />
      );
    }
    return (
      <FridgeUndefinedContainer />
    );
  }
}

export default connect(msp)(FoodPyramid);
