import React from 'react';
import {
  arrayOf,
  shape,
  string,
  number,
  bool,
} from 'prop-types';

import Paper from './base/Paper';

const propTypes = {
  title: string,
  todo: arrayOf(shape({
    id: number.isRequired,
    text: string.isRequired,
    checked: bool.isRequired,
  })).isRequired,
};

const defaultProps = {
  title: '',
};

const TodoList = ({
  title,
  todo,
}) => (
  <Paper>
    <h2>{ title }</h2>
    <hr className="divider--top" />
    <ul>
      {
        todo.length > 0 ? todo.map((item) => (
          <li key={ item.id }>
            { item.text }
          </li>
        )) :
        <div>Great, you have completed all tasks :)</div>
        }
    </ul>
  </Paper>
);

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
