export const getInputValue = state => state.session.get('inputValue');
export const getUsername = state => state.session.get('username');
export const isUserLoggedIn = state => state.session.get('userIsLoggedIn');