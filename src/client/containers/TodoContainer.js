import React from 'react';
import { connect } from 'react-redux';
import {
  arrayOf,
  bool,
  number,
  shape,
  string,
  func,
} from 'prop-types';
import { bindActionCreators } from 'redux';

import Paper from '../components/base/Paper';
import Columns from '../components/base/Columns';
import TodoList from '../components/TodoList';
import * as layouts from '../constants/layouts';
import { toggleTodo } from '../actions/todo';

const propTypes = {
  todo: arrayOf(shape({
    id: number,
    text: string,
    checked: bool,
  })).isRequired,
  actions: shape({
    toggleTodo: func,
  }).isRequired,
};

const TodoContainer = ({ todo, actions }) => (
  <Columns
    options={ layouts.TWO_COLUMNS_LAYOUTS }
  >
    <TodoList
      title="My awesome to do list"
      todo={ todo }
      onToggleTodo={ actions.toggleTodo }
    />
    <Paper>
      Todo form
    </Paper>
  </Columns>
);

TodoContainer.propTypes = propTypes;

const mapStateToProps = (state) => ({
  todo: state.todo,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    toggleTodo,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoContainer);
