import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

const List = props => {
  const { list, error } = props;
  return (
    <React.Fragment>
      { list && list.length > 0 && (
        <table className="table">
          <thead>
            <tr className="table__header-row">
              <th>Time</th>
              <th>Price({ props.currency })</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            { list.map((item, key, array) => (
              <ListItem
                key={ key }
                item={ item }
                lastItem={ array[key + 1] }
                currency={ props.currency }
              />
            )) }
          </tbody>
        </table>
      ) }
      { error && <h3>Unable to load data! :D</h3> }
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    list: state.pricePage.data,
    currency: state.pricePage.currency,
    error: state.pricePage.error,
  };
};

List.propTypes = {
  list: PropTypes.array,
  currency: PropTypes.string,
  error: PropTypes.object,
};

export default connect(mapStateToProps)(List);
