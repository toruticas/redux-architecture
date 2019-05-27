export const CHANGE_INPUT_VALUE = 'todos/CHANGE_INPUT_VALUE';
export const changeInputValue = value => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const ADD_ITEM = 'todos/ADD_ITEM';
export const addItem = item => ({
  type: ADD_ITEM,
  item,
});

export const REMOVE_ITEM = 'todos/REMOVE_ITEM';
export const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
});
