import React from 'react';
import { connect } from 'react-redux';
import {
  shape, number, string, func, arrayOf,
} from 'prop-types';

class RoundEnd extends React.Component {
  constructor() {
    super();

    this.state = { timer: 5 };
  }

  componentDidMount() {
    this.setState({ timer: 5 });
    const { closeModal } = this.props;

    this.roundEndInterval = window.setInterval(() => {
      const { timer } = this.state;
      if (timer === 0) closeModal();

      this.setState({ timer: timer - 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.roundEndInterval);
  }

  render() {
    const { timer } = this.state;
    const { playersInfo } = this.props;
    // debugger;

    return (
      <>
        hello
        <ul>
          {playersInfo.map(player => (
            <li key={player.id}>
              {`${player.id}: ${player.points}`}
            </li>
          ))}
        </ul>

        <button type="button">{`New Round In: ${timer} seconds`}</button>
      </>
    );
  }
}

RoundEnd.propTypes = {
  closeModal: func.isRequired,
  playersInfo: arrayOf(shape({
    id: string,
    points: number,
  })).isRequired,
};

const mapStateToProps = ({ session: { players } }) => {
  const playersInfo = Object.keys(players).map(playerId => ({
    id: playerId,
    points: players[playerId],
  }));

  return {
    playersInfo,
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundEnd);
