import React, { Component } from 'react';
import { connect } from 'react-redux';
import Abilities from './gameOverlay/abilities';
import FoodPyramid from './gameOverlay/foodPyramid';
import Modal from './modal/modal';

// css
import '../../assets/css/overlay.scss';
import '../../assets/css/reset.scss';
import '../../assets/css/canvas.scss';
import '../../assets/css/abilities.scss';
// import { debug } from 'util';

// const msp = state => ({
//   update: state.game.roundsCompleted,
// });

// const HEIGHT = `${window.innerHeight}px`;
// const WIDTH = `${window.innerWidth}px`;

export default class Canvas extends Component {
  // constructor(props) {
  //   super(props);
  //   this.update = this.props.update;
  // }

  componentDidMount() {}

  // componentDidUpdate() {
  //   debugger;
  // }

  render() {
    return (
      <div className="outer">

          <div className="abilities-div">
          <Abilities />
          </div>

        <div className="canvas-container inner">
          
          <canvas
            className="main-canvas"
            id="canvas"
            height="800px"
            width="800px"
          />
        </div>

          <div className="pyramid-div">
          <FoodPyramid />
          </div>

          <Modal />
      </div>
    );
  }
}

// export default connect(msp)(Canvas);
