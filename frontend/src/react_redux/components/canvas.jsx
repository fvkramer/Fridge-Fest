import { connect } from 'react-redux';
import React, { Component } from 'react';
import Abilities from './gameOverlay/abilities';
import FoodPyramid from './gameOverlay/foodPyramid';
import Modal from './modal/modal';

// css
import '../../assets/css/overlay.scss';
import '../../assets/css/reset.scss';
import '../../assets/css/canvas.scss';
import '../../assets/css/abilities.scss';


class Canvas extends Component {
  constructor() {
    super();
    this.audioRef = React.createRef();

    this.play = this.play.bind(this);
  }

  play() {
    this.audioRef.current.play();
  }

  render() {
    const { isRoundOver } = this.props;
    if (isRoundOver) {
      if (window.game) window.game = undefined;
      delete window.game;
      if (window.ctx) window.ctx = undefined;
      delete window.ctx;
      if (window.canvas) window.canvas = undefined;
      delete window.canvas;

      Object.keys(window.myTimeOuts).forEach((key) => {
        window.clearTimeout(window.myTimeOuts[key]);
      });

      return null;
    }
    return (
      <div className="outer">
        <Modal />
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

        <audio
          src="/game/fridge-fest-loop.mp3"
          ref={this.audioRef}
          onLoadedMetadata={this.play}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ game }) => ({
  isRoundOver: game.isRoundOver,
});

export default connect(mapStateToProps, null)(Canvas);
