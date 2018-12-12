import React from 'react';

// Components.
import ListItem from './ListItem';

const ListItems = ({
  items, id, onPasswordChange, onPasswordSubmit, passwordValue, authorized
}) => (
    <div>
      { items.map((item, key) => (
        <ListItem
          key={ `${id}${key}` }
          data={ item }
          onPasswordChange={ onPasswordChange }
          onPasswordSubmit={ onPasswordSubmit }
          passwordValue={ passwordValue }
          authorized={ authorized }
        />
      )) }
    </div>
  );

export default ListItems;
