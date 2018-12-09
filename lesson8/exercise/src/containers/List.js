import React from 'react';

// Components.
import ListHeaderItem from '../components/list/ListHeaderItem';
import ListImage from '../components/list/ListImage';
import Listitems from '../components/list/ListItems';

// Constants.
import { LIST_ITEMS } from '../contants/list'

class List extends React.Component {

  onClick = () => {
    console.log('clicked');
  }
  render() {
    return (
      <article>

        { LIST_ITEMS.map(({ title }, key) => (
          <ListHeaderItem
            key={ key }
            title={ title }
            onClickCallback={ this.onClick }
          />
        )) }

        <ListImage />

        <Listitems
          items={ LIST_ITEMS[0].data }
        />

      </article>
    );
  }
}

export default List;
