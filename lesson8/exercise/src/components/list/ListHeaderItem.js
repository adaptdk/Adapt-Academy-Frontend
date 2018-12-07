import React from 'react';

const ListHeaderItem = ({
  id,
  title,
  isActive,
  onCLickCallback,
}) => (
  <React.Fragment>
    <p onClick={() => {
      onCLickCallback(id)
    }}
    >
      {title}
    </p>

    {isActive &&
    <p>Active</p>
    }

  </React.Fragment>
);

export default ListHeaderItem;
