import React from 'react';

import { Button, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { ReactComponent as Failed } from '../../assets/images/failed.svg';
import { ReactComponent as Success } from '../../assets/images/success.svg';

import { appActions } from '../../redux/actions';

import './styles.scss';

const mapStateToProps = state => ({
  raffleResult: state.appReducers.raffleResult,
});

const mapDispatchToProps = dispatch => ({
  updateRaffleResult: status => dispatch(appActions.updateRaffleResult(status)),
});

const RaffleResult = ({ raffleResult, updateRaffleResult }) => {
  return (
    <div className="raffleResultWrapper">
      {
        raffleResult === 'success' ? (
          <Row className="justify-content-center">
            <Success />
            <h4>Congratulations! 🎉</h4>
            <p>You’ve just won the Spinning Bitcoin from the Silver Raffle!</p>
            <Button onClick={() => updateRaffleResult()}>Redeem Prize</Button>
          </Row>
        ) : (
          <Row className="justify-content-center">
            <Failed />
            <h4>Awww..Bad Luck 😓</h4>
            <p>Lady luck is not in your favor for this Silver Raffle!</p>
            <Button onClick={() => updateRaffleResult()}>Try Again</Button>
          </Row>
        )
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RaffleResult);