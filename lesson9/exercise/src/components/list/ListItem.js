import React from 'react';

const ListItem = ({
  data: {
    label,
    value,
  },
}) => (
  <div>
    <h4>{label}: </h4>
    <p>{value}</p>
  </div>
);

export default ListItem;
