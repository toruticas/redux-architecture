import { Map } from 'immutable';

import { getInputValue, getCurrentIndex } from './selectors';
import {
  addItem as addItemAction,
  changeInputValue,
  removeItem as removeItemAction,
} from './actions';

export const addItem = () => (dispatch, getState) =>  {
  const state = getState();
  const value = getInputValue(state);
  const index = getCurrentIndex(state);

  dispatch(changeInputValue(''));
  dispatch(addItemAction(Map({ id: index, value })));

  dispatch(localStorageSync());
};

export const removeItem = id => (dispatch) => {
  dispatch(removeItemAction(id));
  dispatch(localStorageSync());
};

export const localStorageSync = () => (_, getState) => {
  const todos = getState().todos.toJS();

  localStorage.setItem('redux-todos', JSON.stringify(todos));
};