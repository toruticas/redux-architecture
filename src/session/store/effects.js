import { login as loginAction, logout as logoutAction } from './actions';
import { getInputValue } from './selectors';

export const login = () => (dispatch, getState) => {
  const state = getState();
  const value = getInputValue(state);

  dispatch(loginAction(value));
  dispatch(localStorageSync());
};

export const logout = () => (dispatch) => {
  dispatch(logoutAction());
  dispatch(localStorageSync());  
};

export const localStorageSync = () => (_, getState) => {
  const todos = getState().session.toJS();

  localStorage.setItem('redux-session', JSON.stringify(todos));
};