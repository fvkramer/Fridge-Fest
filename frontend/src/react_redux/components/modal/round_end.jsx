import React from 'react';
import { connect } from 'react-redux';
import { shape, number, string } from 'prop-types';

class RoundEnd extends React.Component {
  constructor() {
    super();

    this.state = {
      timer: 5,
    };
  }

  componentDidMount() {
    const { timer } = this.state;

    this.timerInteval = window.setInterval(
      () => this.setState({ timer: timer - 1 }).bind(this),
      1000,
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.timerInteval);
  }

  render() {
    const { timer } = this.state;
    const { playersInfo } = this.props;

    return (
      <>
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
  playersInfo: shape({
    id: string,
    points: number,
  }).isRequired,
};

const mapStateToProps = ({ game: { fridges } }) => {
  const playersInfo = Object.values(fridges).map(fridge => ({
    id: fridge.id,
    points: fridge.points,
  }));

  return {
    playersInfo,
  };
};

export default connect(mapStateToProps, null)(RoundEnd);
