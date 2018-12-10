import React from 'react';

const ListHeaderItem = ({
  id,
  title,
  onClickCallback,
}) => (
  <p onClick={onClickCallback}>{title}</p>
);

export default ListHeaderItem;
