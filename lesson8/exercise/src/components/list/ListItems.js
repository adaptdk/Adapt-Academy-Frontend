import React from 'react';

// Components.
import ListItem from './ListItem';

const ListItems = ({ items, id }) => (
  <div>
    {items.map((item, key) => (
      <ListItem key={`${id}${key}`} data={item} />
    ))}
  </div>
);

export default ListItems;
