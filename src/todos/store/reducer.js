import { List, Map } from 'immutable';
import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM,
  REMOVE_ITEM
} from './actions';

export const scaffold = Map({
  currentIndex: 1,
  inputValue: '',
  items: List(),
});

export default (state = scaffold, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return state
        .set('inputValue', action.value);
    case ADD_ITEM:
      return state
        .update('items', item => item.push(action.item))
        .update('currentIndex', value => value + 1);
    case REMOVE_ITEM:
      return state
        .update('items',
          value => value.filter(item => item.get('id') !== action.id)
        );
    default:
      return state;
  }
};