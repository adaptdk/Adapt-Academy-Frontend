# Adapt academy react simple starter boilerplate

* [Getting started](#getting-started)
* [Application structure](#application-structure)
* [React quick start tutorial](#react-quick-start-tutorial)

### Getting started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone git@github.com:adaptdk/aa-fe.git
> cd aa-fe
> yarn install
> yarn start:dev
```
Open [http://localhost:4000](http://localhost:4000) in your borwser.

#### Not Familiar with Git?
Click [here](https://github.com/adaptdk/aa-fe/archive/master.zip) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> yarn install
> yarn start:dev
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
   shared/   // Shared code between server and client.
   tests/    // Tests.
   server/   // Server side rendering. API proxying.
   webpack/  // Project build configuration.
```
Mostly you will deal with source code that are placed in `client`, `shared` and `tests` (this will be used to introduce code testing for you ). `shared` contains main component (Html.js) that mimics index.html file. You will use this file for adding third part js libraries or css files that are not fully compatible or not work with npm registy at all (e.g. c3.js).


All your source code during implemantation of your practical task will be places at `client` folder. This folder already includes recommended application structure and also includes some basic components that can be reused and that will give you a quick overview how reusable components can be created and reused.

#### Quick overview of client folder

```
src/
  client/
    index.js            // Application mapping to middlewares, redux store and so on.
    routes.js           // Will define routes of pages.
    initialState.js     // Appplication global initial state.
    App.js              // Application entry point.
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

Such structure allows for us to add pages to application in easy way. All routes and all pages will be added in `routes.js`. Common and reusable components should be extracted and moved to `client/`. 

Right now you get a lot of information that can be not familiar for you. But all concepts will be introduced to you :)
