export const CHANGE_INPUT_VALUE = 'session/CHANGE_INPUT_VALUE';
export const changeInputValue = value => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const LOGIN = 'session/LOGIN';
export const login = username => ({
  type: LOGIN,
  username,
});

export const LOGOUT = 'session/LOGOUT';
export const logout = () => ({
  type: LOGOUT,
})