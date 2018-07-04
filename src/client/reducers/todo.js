import * as types from '../constants/actionTypes';

const initialState = [
  { id: 1, text: 'Set up project.', checked: true },
  { id: 2, text: 'Implement new features.', checked: false },
  { id: 3, text: 'Test new features.', checked: false },
  { id: 4, text: 'Fix bugs.', checked: false },
  { id: 5, text: 'Build and make release.', checked: false },
  { id: 6, text: 'Be a happy developer.', checked: false },
];

const todo = (state = initialState, action) => {
  switch (action.type) {
    case types.TODO_TOGGLE: {
      const { id } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
        return item;
      });
    }
    default:
      return state;
  }
};

export default todo;
