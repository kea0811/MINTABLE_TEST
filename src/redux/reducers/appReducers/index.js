import { SET_RAFFLES_RESULT } from '../../actions/actionTypes';

const initialState = {
  raffleResult: undefined,
  raffleCount: {
    silver: Math.floor(Math.random() * (5 - 0 + 1) + 0),
    gold: Math.floor(Math.random() * (5 - 0 + 1) + 0),
    diamond: Math.floor(Math.random() * (5 - 0 + 1) + 0)
  }
};

const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_RAFFLES_RESULT:
      return {
        ...state, raffleResult: action.value
      };
    
    default:
      return state;
  }
};

export default appReducers;