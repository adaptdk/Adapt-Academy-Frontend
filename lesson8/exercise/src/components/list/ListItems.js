import React from 'react';

// Components.
import ListItem from './ListItem';

const ListItems = ({
  items,
}) => (
  <div>
    {items.map((item, key) => (
      <ListItem
        key={key}
        data={item}
      />
    ))}
  </div>
);

export default ListItems;
