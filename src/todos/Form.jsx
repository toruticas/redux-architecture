import React from 'react';
import { connect } from "react-redux";

import { getInputValue } from './store/selectors';
import { changeInputValue } from './store/actions';
import { addItem } from './store/effects';

const Form = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>New Todo:</label>
    <br />
    <input value={value} onChange={onChange} />
    <input type="submit" value="Add Todo" />
  </form>
);

Form.displayName = 'TodosForm';

export const mapStateToProps = state => ({
  value: getInputValue(state),
});

export const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeInputValue(event.target.value)),
  onSubmit: event => {
    event.preventDefault();
    dispatch(addItem());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);