import React from 'react';

const ListHeaderItem = ({
  id,
  title,
  isActive,
  onCLickCallback,
}) => (
    <div onClick={ () => {
      onCLickCallback(id)
    } } className={ isActive ? "list-group-item active" : "list-group-item" }>
      <p
      >
        { title }
      </p>
    </div>
  );

export default ListHeaderItem;
