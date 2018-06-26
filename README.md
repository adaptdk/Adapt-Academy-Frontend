# Adapt academy react simple starter boilerplate

* [Getting started](#getting-started)
* [Application structure](#application-structure)
* [React quick start tutorial](#react-quick-start-tutorial)

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