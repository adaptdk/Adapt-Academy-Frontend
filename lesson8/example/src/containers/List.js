import React from 'react';

// Components.
import ListHeaderItem from '../components/list/ListHeaderItem';

// Constants.
import { LIST_ITEMS } from '../contants/list'

class List extends React.Component {
  render() {
    return (
      <article>
        {LIST_ITEMS.map(({ title }, key) => (
          <ListHeaderItem
            key={key}
            title={title}
          />
        ))}
      </article>
    );
  }
}

export default List;
