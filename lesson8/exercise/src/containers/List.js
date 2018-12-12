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
    currentlyTypedPass: '',
    password: 'admin',
    authorized: false,

  };

  onClick = (id) => {
    this.setState(({ activeId }) => ({
      activeId: id === activeId ? undefined : id,
    }))
  };

  onPasswordChange = (e) => {
    console.log('changed');
    this.setState({
      currentlyTypedPass: e.target.value,
    })
  }

  onPasswordSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.currentlyTypedPass) {
      this.setState({
        authorized: true,
      });
    } else {
      alert('Neturite prieigos!!! :DDDD');
    }
  }

  render() {
    const { activeId } = this.state;
    const activeItems = LIST_ITEMS.find(({ id }) => (id === activeId));
    return (
      <article>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 list-group">
              { LIST_ITEMS.map(({ title, id }) => (
                <ListHeaderItem
                  key={ id }
                  id={ id }
                  isActive={ id === activeId }
                  title={ title }
                  onCLickCallback={ this.onClick }
                />
              )) }
            </div>

            <div className="col-md-3">
              <ListImage />
            </div>
            <div className="col-md-6">
              { activeItems &&
                <ListItems
                  items={ activeItems.data }
                  id={ activeItems.id }
                  onPasswordSubmit={ this.onPasswordSubmit } onPasswordChange={ this.onPasswordChange }
                  passwordValue={ this.state.currentlyTypedPass }
                  authorized={ this.state.authorized }
                />
              }
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default List;
