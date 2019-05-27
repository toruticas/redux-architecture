import React from 'react';
import { connect } from "react-redux";

import { getInputValue, isUserLoggedIn } from './store/selectors';
import { changeInputValue } from './store/actions';
import { login } from './store/effects'

const Form = ({ isUserLoggedIn, value, onChange, onSubmit }) => {
  if (isUserLoggedIn) {
    return false;
  }
  
  return (
    <form onSubmit={onSubmit}>
      <label>Username:</label>
      <br />
      <input value={value} onChange={onChange} />
      <input type="submit" value="Login" />
    </form>
  );
};

Form.displayName = 'SessionForm';

export const mapStateToProps = state => ({
  isUserLoggedIn: isUserLoggedIn(state),
  value: getInputValue(state),
});

export const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeInputValue(event.target.value)),
  onSubmit: event => {
    event.preventDefault();
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);