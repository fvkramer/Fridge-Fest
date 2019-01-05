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
        <div className="food-item-container">{`Instant Ramen ${props.currentFridge.instantRamen}`}</div>
        <div className="food-item-progress-bar" style={{ width: `${props.currentFridge.instantRamen * 100}%` }} />
      </div>
      <div className="food-container-subclass">
        <div className="food-item-container">{`Milk Shake ${props.currentFridge.milkshake}`}</div>
        <div className="food-item-progress-bar" style={{ width: `${props.currentFridge.milkShake * 33.33}%` }} />
      </div>
      <div className="food-container-subclass">
        <div className="food-item-container">{`Snickers ${props.currentFridge.snicker}`}</div>
        <div className="food-item-progress-bar" style={{ width: `${props.currentFridge.snicker * 20}%` }} />
      </div>
      <div className="food-container-subclass">
        <div className="food-item-container">{`Donut ${props.currentFridge.donut}`}</div>
        <div className="food-item-progress-bar" style={{ width: `${props.currentFridge.donut * 20}%` }} />
      </div>
      <div className="food-container-subclass">
        <div className="food-item-container">{`Pizza ${props.currentFridge.pizza}`}</div>
        <div className="food-item-progress-bar" style={{ width: `${props.currentFridge.pizza * 20}%` }} />
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
