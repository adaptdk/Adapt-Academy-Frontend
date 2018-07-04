import React from 'react';
import {
  arrayOf,
  shape,
  string,
  number,
  bool,
  func,
} from 'prop-types';

import Paper from './base/Paper';

const propTypes = {
  title: string,
  todo: arrayOf(shape({
    id: number.isRequired,
    text: string.isRequired,
    checked: bool.isRequired,
  })).isRequired,
  onToggleTodo: func.isRequired,
};

const defaultProps = {
  title: '',
};

const TodoList = ({
  title,
  todo,
  onToggleTodo,
}) => {
  const onChangeCallback = (id) => () => onToggleTodo(id);

  return (
    <Paper>
      <h2>{ title }</h2>
      <hr className="divider--top" />
      {
        todo.length > 0 ? todo.map((item) => (
          <div key={ item.id } className="padding--small-bottom">
            <label
              htmlFor={ `todoItem-${item.id}` }
            >
              <input
                id={ `todoItem-${item.id}` }
                className="margin--small-right"
                type="checkbox"
                checked={ item.checked }
                onChange={ onChangeCallback(item.id) }
              />
              <span style={ {
                  textDecoration: `${item.checked ? 'line-through' : 'none'}`,
                } }
              >
                { item.text }
              </span>
            </label>
          </div>
          )) :
        <div>Great, you have completed all tasks :)</div>
      }
    </Paper>
  );
};

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
