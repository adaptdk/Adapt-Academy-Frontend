import React from 'react';
import Paper from '../components/base/Paper';
import Columns from '../components/base/Columns';
import * as layouts from '../constants/layouts';

const TodoContainer = () => (
  <Columns
    options={ layouts.TWO_COLUMNS_LAYOUTS }
  >
    <Paper>
      Todo list
    </Paper>
    <Paper>
      Todo form
    </Paper>
  </Columns>
);

export default TodoContainer;
