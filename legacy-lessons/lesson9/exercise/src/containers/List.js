import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components.
import ListHeaderItem from '../components/list/ListHeaderItem';
import ListImage from '../components/list/ListImage';
import ListItems from '../components/list/ListItems';

// Constants.
import { LIST_ITEMS } from '../contants/list'

// Actions.
import listSetActive from '../actions/list/listSetActive';

class List extends React.Component {
  onClick = (id) => {
    this.props.actions.listSetActive({
      id,
    });
  };

  onClickButton = () => {
    console.log("click");
  };

  render() {
    const { items, activeId } = this.props;

    //console.log(this.props);

    const activeItems = items.find(({ id }) => (id === activeId));
    return (
      <article>

        <button onClick={this.onClickButton}>Test</button>

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

const mapStateToProps = ({ list }) => {
  return {
    ...list,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    listSetActive,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
