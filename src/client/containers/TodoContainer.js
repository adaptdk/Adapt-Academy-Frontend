import React from 'react';
import Paper from '../components/base/Paper';
import Columns from '../components/base/Columns';
import TodoList from '../components/TodoList';
import * as layouts from '../constants/layouts';

// It's not a good idea to include (describe) mocked data in container or components.
// But right now we will keep it here.
const mockedTodoList = [
  { id: 1, text: 'Set up project.', checked: true },
  { id: 2, text: 'Implement new features.', checked: false },
  { id: 3, text: 'Test new features.', checked: false },
  { id: 4, text: 'Fix bugs.', checked: false },
  { id: 5, text: 'Build and make release.', checked: false },
  { id: 6, text: 'Be a happy developer.', checked: false },
];

const TodoContainer = () => (
  <Columns
    options={ layouts.TWO_COLUMNS_LAYOUTS }
  >
    <TodoList
      title="My awesome to do list"
      todo={ mockedTodoList }
    />
    <Paper>
      Todo form
    </Paper>
  </Columns>
);

export default TodoContainer;
