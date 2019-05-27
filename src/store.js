import { fromJS } from 'immutable';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import session from './session/store/reducer';
import todos from './todos/store/reducer';

const loadInitialState = () => {
  const session = JSON.parse(localStorage.getItem('redux-session')) || undefined;
  const todos = JSON.parse(localStorage.getItem('redux-todos')) || undefined;

  return {
    session: session ? fromJS(session) : undefined,
    todos: todos ? fromJS(todos) : undefined,
  };
};

export default createStore(
  combineReducers({
    session,
    todos,
  }),
  loadInitialState(),
  applyMiddleware(thunk),
);
