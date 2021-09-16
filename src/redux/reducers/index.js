import { combineReducers } from 'redux';

import appReducers from './appReducers';

const appReducer = combineReducers({
  appReducers,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;