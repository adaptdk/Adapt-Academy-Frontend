import React from 'react';
import { connect } from 'react-redux';
import { setActive } from '../actions/listActions';

// Components.
import ListHeaderItem from '../components/list/ListHeaderItem';
import ListImage from '../components/list/ListImage';
import ListItems from '../components/list/ListItems';

class List extends React.Component {
  onClick = id => {
    if (this.props.activeId === id) {
      this.props.setActive(0);
    } else {
      this.props.setActive(id);
    }
  };

  render() {
    const { activeId } = this.props;

    const { list } = this.props;
    const activeItems = list.find(item => item.id === activeId);
    return (
      <article>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 list-group">
              {list.map(({ title, id }) => (
                <ListHeaderItem
                  key={id}
                  id={id}
                  isActive={id === activeId}
                  title={title}
                  onCLickCallback={this.onClick}
                />
              ))}
            </div>

            <div className="col-md-3">
              <ListImage />
            </div>
            <div className="col-md-6">
              {activeItems && (
                <ListItems items={activeItems.data} id={activeItems.id} />
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.data,
    activeId: state.activeId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActive: id => dispatch(setActive(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
