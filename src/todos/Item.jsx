import React from 'react';

const Item = ({ id, value, onRemove }) => (
  <li>
    {value}
    <button
      onClick={() => onRemove(id)}
      style={{ marginLeft: 20 }}
    >
      remove
    </button>
  </li>
);

Item.displayName = 'TodosItem';

export default Item;