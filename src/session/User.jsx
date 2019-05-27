import React from 'react';
import { connect } from "react-redux";

import { getUsername, isUserLoggedIn } from './store/selectors';
import { logout } from './store/effects';

const User = ({ isUserLoggedIn, username, onLogout }) => {
  if (!isUserLoggedIn) {
    return false;
  }
  
  return (
    <div>
      Hello, <strong>{username}</strong>
      <button onClick={onLogout} style={{ marginLeft: 15 }}>
        Logout
      </button>
    </div>
  );
};

User.displayName = 'SessionUser';

export const mapStateToProps = state => ({
  username: getUsername(state),
  isUserLoggedIn: isUserLoggedIn(state),
});

export const mapDispatchToProps = dispatch => ({
  onLogout: event => {
    event.preventDefault();
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(User);