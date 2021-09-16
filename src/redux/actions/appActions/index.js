import { SET_RAFFLES_RESULT } from '../actionTypes';

const setRaffleResult = platform => ({
  type: SET_RAFFLES_RESULT,
  value: platform
});

const updateRaffleResult = value => dispatch => (
  dispatch(setRaffleResult(value))
);

export default {
  updateRaffleResult,
};