# Adapt academy react simple starter boilerplate

* [Getting started](#getting-started):
* [Application structure](#application-structure):
	1. [Quick overview of client folder](#quick-overview-of-client-folder)
* [React quick start tutorial](#react-quick-start-tutorial):
	1. [Adding new page](#adding-new-page)
	2. [Defining a component](#defining-a-component)
	3. [Managing application state](#managing-application-state)
	4. [Managing application state with Redux](#managing-application-state-with-redux)

---

### Getting started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the webpack process with the following:

```
> git clone git@github.com:adaptdk/aa-fe.git
> cd aa-fe
> npm install -g yarn
> yarn install
> yarn start:dev
```

You can use only npm as well

```
> git clone git@github.com:adaptdk/aa-fe.git
> cd aa-fe
> npm install
> npm run start:dev
```

Open [http://localhost:4000](http://localhost:4000) in your borwser.

#### Not Familiar with Git?
Click [here](https://github.com/adaptdk/aa-fe/archive/master.zip) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> yarn install
> yarn start:dev
```
or 

```
> npm install
> npm run start:dev
```

Open [http://localhost:4000](http://localhost:4000) in your borwser.

#### Code formatting and styleguide

For JS files in most cases you will follow Eslint rules. Eslint will inform when your code is written wrongly:

```
> yarn lint
```

Some of the warnings or even errors can be fixed automatically:

```
> yarn lint --fix
```

For sass files you will use `sass-lint` linter:

```
> yarn lint:sass
```

### Application structure

Application is structured by LIFT principle:

- Locating of code is easy
- Identify code at a glance
- Flat structure as long as we can 
- Try to stay DRY (Don’t Repeat Yourself) or T-DRY

There are three main source folders:

```
src/
   client/   // Most of your time you will spend in this folder :)
   server/   // Server side rendering. API proxying.
   tests/    // Tests.
   shared/   // Shared code between server and client.
   webpack/  // Project build configuration.
```

Mostly you will deal with source code that are placed in `client` and `tests` (this will be used to introduce code testing for you ). `client` contains main component (Html.js) that mimics index.html file. You will use this file for adding third part js libraries or css files that are not fully compatible or not work with npm registy at all (e.g. c3.js).

All your source code during implemantation of your practical task will be placed at `client` folder. This folder already includes recommended application structure and also includes some basic components that can be reused and that will give you a quick overview how reusable components can be created and reused.

#### Quick overview of client folder

```
src/
  client/
    index.js            // Application mapping to middlewares, redux store and so on.
    routes.js           // Will define routes of pages.
    initialState.js     // Appplication global initial state.
    App.js              // Application entry point.
    Html.js             // Third part libraries through cdn can be added here.
    tests/              // Testing. We will do only simple testing.
      components/
        Homespec.js
          ...
       ...
    assets/             // Images and so on.
      image.png
      image.svg
      ...
    styles/             // All styles.
      base/
      components/
        base/
          columns.scss
          ...
        ...
    components/         // Components that will go to containers.
      base/             // Common components that will be used in other components or containers.
        RootRedirector.js
        Nav.js
        ...
      Home.js
      ...
    containers/         // Containers will contains other components and will represent a page in application (Login, Home).
      HomeContainer.js. // `Home` page for example.
    store/              // Will configure all reducers and initialize store. 
	   index.js
    actions/            // Actions (functions) that will dispatch actions (will describe what happened in application).            
      index.js
      ...
    reducers/           // Reducers that will specify how application behave in response to actions and change state in store depending on action types. 
      index.js
      ...
    constants/          // Common constants      
      actionTypes.js
      ...
    middlewares/        // Redux middlewares (enhance functions) that will enhance it. Middleware lets you wrap the store's dispatch method for fun and profit.
      index.js
      ...  
    utils/              // Common used helper functions (utils).
	   toCamelCase.js
	  ...
```

Such structure allows for us to add pages to application in easy way. All routes and all pages will be added in `routes.js`. Common and reusable components should be extracted and moved to `client/base`. 

Right now you got a lot of information that can be not familiar for you. But all concepts will be introduced to you :)

### React quick start tutorial

#### Adding new page

First of all lets create new container that will contain our page components.

```
// src/client/containers/TodoContainer.js

import React from 'react';

const TodoContainer = () => (
  <div>
    Todo page
  </div>
);

export default TodoContainer;

```

and register it in routes.js

```
// src/client/routes.js

import React from 'react';
import RootRedirector from './components/base/RootRedirector';
// Pages.
import HomeContainer from './containers/HomeContainer';
import TodoContainer from './containers/TodoContainer';

const routes = [
  {
    path: '/',
    displayName: 'Root',
    exact: true,
    Component: () => <RootRedirector to="/home" />,
  },
  {
    path: '/home',
    displayName: 'Welcome to Adapt',
    exact: true,
    Component: HomeContainer,
  },
  {
    path: '/todo',
    displayName: 'To do',
    exact: true,
    Component: TodoContainer,
  },
];

export default routes;
```

Hurray, we have created our first page:

![To do page](https://raw.githubusercontent.com/adaptdk/aa-fe/master/tutorial/todo-page-step-1.png)

You can see that navigation menu is genarated automatically. This is because we use `Nav` base component. Let's see how we can use other base components that already exists in our starter project.

Lets add `Paper` component. Basically this component will create white box with shadow which can be used for page widget creation.

```
// src/client/containers/TodoContainer.js 

import React from 'react';
import Paper from '../components/base/Paper';

const TodoContainer = () => (
  <Paper>
    Todo page
  </Paper>
);

export default TodoContainer;
```

![To do page widget](https://raw.githubusercontent.com/adaptdk/aa-fe/master/tutorial/todo-page-step-2.png)

We can layout page by splitting it into two separate widgets by using base `Columns` component:

```
// src/client/containers/TodoContainer.js 

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
```

Now we have a new created page with two widgets (todo list and todo form):

![To do page with two widgets](https://raw.githubusercontent.com/adaptdk/aa-fe/master/tutorial/todo-page-step-3.png)

You have learned:

* How to create a new page and register it in application;
* Become familiar with already existing base components;

The main principle of React.js is not only component creation, but reusing of existing generic components that can be combined together. So now you can create a lot of page with widgets that can be layouted in different way. We have used existing base components to demonstrate the power of reusable components. You are free to create your own ;) 

##### Something goes wrong or you are lazy to type? 

You can switch to already implemented step of creation page of this tutorial:

```
> git checkout tutorial-step-1
```

#### Defining a component

Component can be defined as: 
* stateless (by using plain JS function);
* statefull (by using ES6 class).

##### Steteless component

```
import React from 'react';

const Component({ name }) => (
	<div>Hello { name }</div>
);
```

##### Statefull component

```
import React, { Component } from 'react';

class Component extends Component {
	render() {
		const { name } = this.props;
		
		return (
			<div>Hello { name }</div>
		);
	}
}
```

#### Managing application state

Components can store state during so called lifecycle (will be explained later in more details). Every component after mounting and dom rendering can display some data that are passed down to them. It is important to notice that components have only one way data binding. It means that parent component can pass data to his childrens only and not vice verus.

```
   ParentComponent
         |
         V
       props
         |
         V
   ChildrenComponent
```

Data to components can be passed by so called properties. Properties can't be modified (can't be changed) during component lifecycle. It means that component by itself can't change properties. Properties can't be only changed outside of component.

```
// Component usage
<Component 
	width={ 512 }   // width property
	height={ 512 }  // height property
/>

// Component declaration
import React from 'react';

// Is a good :)
const Component = ({ width, height }) => {
	return (
		<div>My size is: { width } x { height }</div>
	);
}

// Is a bad :)
const Component = ({ width, height }) => {
	// Properties should be used only for reading data
	width = width + 15;   // Not ok. Avoid this.
	height = height + 15; // Not ok. Avoid this.
	
	return (
		<div>My size is: { width } x { height }</div>
	);
}
```

If you need to have mutable state inside of component during his lifecycle, you can use state for that.

```
// Component usage

<Component 
	width={ 512 }   // width property
	height={ 512 }  // height property
/>

// Component declaration

import React, { Component, Fragment } from 'react';

class Component extends Component {
	constructor(props) {
		super(props);
		// Setting default state from incoming props
		const { width, height } = this.props;
	 	
		this.state = {
			width,
			heiht,
		}
	}
	
	onClick() {
		const { width, height } = this.state;
	
		this.setState({
			width: width + 10,
			height: height + 10
		});
	}

	render() {
		const { name } = this.props;
		
		return (
			<Fragment>
				<div>
			   		My size is {width} x {height}
		   		</div>
				<button onClick={ increaseSize }/>
			</Fragment>
		);
	}
}
```
 
You can change state by using setState() method. From React documentation:

Think of setState() as a request rather than an immediate command to update the component. For better perceived performance, React may delay it, and then update several components in a single pass. React does not guarantee that the state changes are applied immediately.

Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state. You should use:

```
// Correct when you need to use this.state and this.props 
// for calculating new values for state.
this.setState((prevState, props) => ({
   width: prevState.width + 10,
   height: prevState.height + props.height,
}));
```

##### Creating ToDoList component

We have already created `TO DO` page that have two simple widgets that display text.

If you didn't complete previous steps of tutorial, you can checkout previous step with:

```
> git checkout tutorial-step-1
```

Lets create ToDoList that will be placed in the widget in the left side that will replace plain text.

```
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
```

It's a good practise to use PropTypes with React components. PropTypes is a helper library that is used for describing what kind of data will be passed to component. It's something like contract between data that will be passed to component and component. It data will contain wrong type or structure React will throw error message in browser console. This will let to decrease errors in your application and will let for developer to be aware about component (what kind of data component is using).

Let's include this component in our `Todo` page.

```
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
```
Now you should see `Todo` page with `TodoList` basic widget that can render list:

![To do page with todo list](https://raw.githubusercontent.com/adaptdk/aa-fe/master/tutorial/todo-page-step-4.png)

You have learned:

* How to create a new component;
* How to pass data to it by using properties;
* How to validate data with PropTypes that are passed to component;
* How to include component in page and pass data to it from page;

##### Something goes wrong or you are lazy to type? 

You can switch to already implemented step of creation page of this tutorial:

```
> git checkout tutorial-step-2
```

#### Managing application state with Redux

Redux - a helper library that is used alongside with React. It's a predictable state container for js applications. Basically redux operates in a similiar fashion to a reducing function. What does it mean? It means that all state of your application is stored in an object tree and the only way to change the state is to emit an `action` (object that describes what happened) that is handled by pure function called reducer. Reducers are just pure functions that take the previous state and an action, and return the next state. 

Basically before start using redux in your application you need to configure store, that contains application state as tree object. React boilerplate already did this work for you. So you just need to write new reducers and actions for emiting and handling state changes. Let's start writing reducer :)

##### Creating todo reducer

We already have `TodoList` that we can connect to reducer so we can start implementing reducer for that component. If you don't, just run:

If you didn't complete previous steps of tutorial, you can checkout previous step with:

```
> git checkout tutorial-step-2
```

First of all we will create `todo` reducer as a simple pure function that will always return the same state (todo list):

```
// src/client/reducers/todo.js

const initialState = [
  { id: 1, text: 'Set up project.', checked: true },
  { id: 2, text: 'Implement new features.', checked: false },
  { id: 3, text: 'Test new features.', checked: false },
  { id: 4, text: 'Fix bugs.', checked: false },
  { id: 5, text: 'Build and make release.', checked: false },
  { id: 6, text: 'Be a happy developer.', checked: false },
];

const todo = (state = initialState) => state;

export default todo;

```

That's all. This is our reducer that always returns the same application state. Now we need to add it to store. This can be done in `src/client/reducers/index.js` file:

```
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import todo from './todo';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  todo,
});
```
Right now, we already included todo reducer in  our store and we can inspect it by using react dev tool ([more about react dev tool](https://reactjs.org/blog/2014/01/02/react-chrome-developer-tools.html)) or redux dev tool ([more about redux dev tool](https://codeburst.io/redux-devtools-for-dummies-74566c597d7)):

![To do page with simple reducer](https://raw.githubusercontent.com/adaptdk/aa-fe/master/tutorial/todo-reducer-step-1.png)

Now we need to connect our store in our component and pass `todo` object from state and this can be done by using so called high order function - `connect` and pure function `mapStateToProps` like it is done below:

```
import React from 'react';
import { connect } from 'react-redux';
import {
  arrayOf,
  bool,
  number,
  shape,
  string,
} from 'prop-types';

import Paper from '../components/base/Paper';
import Columns from '../components/base/Columns';
import TodoList from '../components/TodoList';
import * as layouts from '../constants/layouts';

const propTypes = {
  todo: arrayOf(shape({
    id: number,
    text: string,
    checked: bool,
  })).isRequired,
};

const TodoContainer = ({ todo }) => (
  <Columns
    options={ layouts.TWO_COLUMNS_LAYOUTS }
  >
    <TodoList
      title="My awesome to do list"
      todo={ todo }
    />
    <Paper>
      Todo form
    </Paper>
  </Columns>
);

TodoContainer.propTypes = propTypes;

// Mapping `todo` object from state to component properties
const mapStateToProps = (state) => ({
  todo: state.todo,
});

// Connecting `todo` object to properties in container
export default connect(mapStateToProps)(TodoContainer);
```

Right now, we only passing some immutable state to our `TodoList` component through container (page).

##### Creating todo actions

There is no point to have only state in React components. In most cases we need to have possibility to update state of application when user interact with user interface (for example pressing on checkbox should stroke text in todo list) and dispatch that changes to reducer that will update application state.

The state can be changed with actions. Actions are payloads of information that send data from your application to your store. They are the only source of information for the store and you can send them to the store using:

```
store.dispatch({
	type: 'TODO_TOGGLE', // action type
	payload: { id }, // data passed to reducer
})
```

The `dispatch()` function can be accessed directly from the store as `store.dispatch()`, but more likely you'll access it using a helper like `react-redux` connect(). You can use bindActionCreators() to automatically bind many action creators to a dispatch() function. You will become familiar with that later. Now let concentrate on implementing actions creator. 

For small projects it's ok to define `type` as a string literals, but for bigger projects it's a common practise to define action types as a constant in separate file (some patterns suggest to store action types in the same file were lives reducer).

Lets implement possibility to toggle our tasks in todo list.

First of all we need to slightly modify our TodoList component.

```
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
    id: number,
    text: string,
    checked: bool,
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
              onChange={ () => {} }
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

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
```

Now our component will have checkboxes that will let for us to stroke one of the todo list:

![To do page with simple reducer](https://raw.githubusercontent.com/adaptdk/aa-fe/master/tutorial/todo-reducer-step-2.png)

You have already noticed that it is not possible to check or uncheck checkboxes. This is because our `input` elements are controled by React component. In this case item.checked for concrete `input` element is not updated when change event is fired.

We need to pass action creator to our component, that will triger state change in reducer. First of all we need to create our action creator that will pass action to reducer and describe what should happen when that action is passed to reducer:

```
// src/client/actions/todo.js
import * as types from '../constants/actionTypes';

export const toggleTodo = (id) => ({ type: types.TODO_TOGGLE, payload: { id } });

// src/client/constants/actionTypes.js
export const TODO_TOGGLE = 'TODO_TOGGLE';

// src/client/reducers/todo.js
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
```

Now we can pass action to container and its components:

```
// src/client/containers/TodoContainer.js
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

// We will bind dispatch to our action creater and map 
// it to props so it would be possible 
// to trigger state change in reducer.
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    toggleTodo,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoContainer);
```

and our `TodoList` component will look:

```
// src/client/components/TodoList.js
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
  // This is so called cyrrying in JS. 
  // This means that we pass id from component render part to function that 
  // can acces id and so called SyntheticEvent (evt) 
  const onChangeCallback = (id) => (evt) => onToggleTodo(id);

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
```

It's possible to write:

```
<input
	id={ `todoItem-${item.id}` }
	className="margin--small-right"
	type="checkbox"
	checked={ item.checked }
	onChange={ (evt) => onToggleTodo(id) }
/>
```

But for performance it's better to use so called currying (partial applying).

Now you will be able to check checkboxes and stroke a todo task :)

In short. Our action creator with action `{ type: types.TODO_TOGGLE, payload: { id } }` will inform reducer that something happened in front end and we need to do changes on application state:

```
<TodoList { ...props } />

		|
		V

<input onChange={ (evt) => toggleTodo(item.id) }/>

		|
		V

{ type: types.TODO_TOGGLE, payload: { id } }

		|
		V

case types.TODO_TOGGLE: {
  const { id } = action.payload;
  return state.map((item) => {
    if (item.id === id) {
      item.checked = !item.checked;
    }
    return item;
  });
}

		|
		V

State is mapped to props in <TodoContainer { ...props } />

		|
		V

New props emits rendering in <TodoList { ...props } /> and list is updated
```

![To do page with complete reducer](https://raw.githubusercontent.com/adaptdk/aa-fe/master/tutorial/todo-reducer-step-3.png)

You have learned:

* How to create reducer that will be responsible for state managing;
* How to create action that will inform reducer about changes in front end (button click, input change and so on);
* How to pass state from reducer to container and its components props;
* How to bind action creators in container and its components;

##### Something goes wrong or you are lazy to type? 

You can switch to already implemented step of creation page of this tutorial:

```
> git checkout tutorial-step-3
```

