import React from 'react';

// Components.
import ListHeaderItem from '../components/list/ListHeaderItem';
import ListImage from '../components/list/ListImage';
import Listitems from '../components/list/ListItems';

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
    return (
      <article>
        <div className="list__wrapper">
        {LIST_ITEMS.map(( {title}, key) => (
          <ListHeaderItem
            key={key}
            title={title}
            onClickCallback={this.onClickFunc}
          />
        ))}
        </div>
        <ListImage/>

        <Listitems
          items={LIST_ITEMS[0].data}
        />

      </article>
    );
  }
}

export default List;
