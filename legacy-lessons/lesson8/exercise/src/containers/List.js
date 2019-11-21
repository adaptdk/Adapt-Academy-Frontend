import React from 'react';

// Components.
import ListHeaderItem from '../components/list/ListHeaderItem';
import ListImage from '../components/list/ListImage';
import ListItems from '../components/list/ListItems';

// Constants.
import { LIST_ITEMS } from '../contants/list'

class List extends React.Component {
  state = {
    activeId: undefined,
  };

  onClick = (id) => {
    this.setState(({ activeId }) => ({
      activeId: id === activeId ? undefined : id,
    }))
  };

  render() {
    const { activeId } = this.state;
    const activeItems = LIST_ITEMS.find(({ id }) => (id === activeId));
    return (
      <article>

        {LIST_ITEMS.map(({ title, id }) => (
          <ListHeaderItem
            key={id}
            id={id}
            isActive={id === activeId}
            title={title}
            onCLickCallback={this.onClick}
          />
        ))}

        <ListImage/>

        {activeItems &&
        <ListItems
          items={activeItems.data}
        />
        }

      </article>
    );
  }
}

export default List;
