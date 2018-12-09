import React from 'react';

const ListHeaderItem = ({
  title,
  onClickCallback,
}) => (
    <p onClick={ onClickCallback }>{ title }</p>
  );

export default ListHeaderItem;
