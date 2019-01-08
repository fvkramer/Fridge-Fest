import React from 'react';
import { connect } from 'react-redux';
import postResults from '../../actions/points_actions';

const msp = state => ({
  points: state.session.players,
});

const mdp = dispatch => ({
  postResults: points => dispatch(postResults(points)),
});

class GameEnd extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        Game Ended
      </>
    );
  }
}


export default connect(msp, mdp)(GameEnd);
