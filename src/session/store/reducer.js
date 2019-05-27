import { Map } from 'immutable';

import { CHANGE_INPUT_VALUE, LOGIN, LOGOUT } from './actions';

const scaffold = Map({
  username: '',
  inputValue: '',
  userIsLoggedIn: false,
});

export default (state = scaffold, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return state
        .set('inputValue', action.value);
    case LOGIN:
      return state
        .set('username', action.username)
        .set('inputValue', '')
        .set('userIsLoggedIn', true);
    case LOGOUT:
      return state
        .set('username', '')
        .set('userIsLoggedIn', false);
    default:
      return state;
  }
};
