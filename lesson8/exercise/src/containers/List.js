import React from 'react';

// Components.
import ListHeaderItem from '../components/list/ListHeaderItem';
import ListImage from '../components/list/ListImage';
import ListItems from '../components/list/ListItems';

// Constants.
import { LIST_ITEMS } from '../contants/list'

class List extends React.Component {
  
  onClickFunc = () => {
    let array;
    const met = () => LIST_ITEMS.forEach(items => array = items)
    //.map(items => items)
    //.map(items => items);
    met();
    console.log(array);
    
  }

  render() {
    const { activeId } = this.state;
    const activeItems = LIST_ITEMS.find(({ id }) => (id === activeId));
    return (
      <article>
        <div className="list__wrapper">
        {LIST_ITEMS.map(( {title}, key) => (
          <ListHeaderItem
            key={id}
            id={id}
            isActive={id === activeId}
            title={title}
            onClickCallback={this.onClickFunc}
          />
        ))}
        </div>
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
