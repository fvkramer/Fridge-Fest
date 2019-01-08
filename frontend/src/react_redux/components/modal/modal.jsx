import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import RoundEnd from './round_end';
import GameEnd from './game_end';

const Modal = ({ modal }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'roundEnd':
      component = <RoundEnd />;
      break;
    case 'gameEnd':
      component = <GameEnd />;
      break;
    default:
      return null;
  }


  return (
    <div className="modal-background">
      <div className="modal-child">
        {component}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  modal: null,
};
Modal.propTypes = {
  modal: string,
};

const mapStateToProps = ({ ui: { modal } }) => ({
  modal,
});

export default connect(mapStateToProps)(Modal);

