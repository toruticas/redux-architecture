import React from 'react';
import { connect } from "react-redux";

import { getItems, } from './store/selectors';
import { removeItem } from './store/effects';

import Item from './Item';
import Form from './Form';

const Todos = ({ items, onRemoveItem }) => (
  <div>
    <h1>Todos</h1>
    <Form />
    <ul>
      {items.map(item => (
        <Item
          key={item.get('id')}
          id={item.get('id')}
          value={item.get('value')}
          onRemove={onRemoveItem}
        />
      ))}
    </ul>
  </div>
);

Todos.displayName = 'Todos';

export const mapStateToProps = state => ({
  items: getItems(state),
});

export const mapDispatchToProps = dispatch => ({
  onRemoveItem: id => dispatch(removeItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);