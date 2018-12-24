import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array.isRequired,
};

const TableView = ({ data }) => (
  <table className="pure-table dashboard1__table">
    <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Price</th>
      <th>Change</th>
    </tr>
    </thead>
    <tbody>
    {
      map(data, ({ id, time, close, change }) => (
        <tr key={ id }>
          <td>{ id }</td>
          <td>{ time }</td>
          <td>{ close }</td>
          <td>{ change }</td>
        </tr>
      ))
    }
    </tbody>
  </table>
);

TableView.propTypes = propTypes;

export default TableView;
