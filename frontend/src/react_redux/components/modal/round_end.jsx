import React from 'react';
import { connect } from 'react-redux';
import { shape, number, string } from 'prop-types';

const RoundEnd = ({ playersInfo }) => (
  <>
    <ul>
      {playersInfo.map(player => (
        <li key={player.id}>
          {`${player.id}: ${player.points}`}
        </li>
      ))}
    </ul>

    <button type="button">Spinning image waiting for next round here</button>
  </>
);

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
