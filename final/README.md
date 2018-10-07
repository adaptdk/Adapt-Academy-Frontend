

# Adapt academy react simple starter boilerplate

* [Getting started](#getting-started)
* [Application structure](#application-structure)
* [Task](#task)

---

### Getting started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the webpack process with the following:

```
> git clone git@github.com:adaptdk/Adapt-Academy-Frontend.git
> cd Adapt-Academy-Frontend/final
> npm install -g yarn
> yarn install
> yarn start
```

You can use only npm as well

```
> git clone git@github.com:adaptdk/Adapt-Academy-Frontend.git
> cd Adapt-Academy-Frontend/final
> npm install
> npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your borwser.

#### Not Familiar with Git?
Click [here](https://github.com/adaptdk/Adapt-Academy-Frontend/archive/master.zip) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> yarn install
> yarn start
```
or 

```
> npm install
> npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your borwser.

#### Code formatting and styleguide

For JS files in most cases you will follow Eslint rules. Eslint will inform when your code is written wrongly:

```
> yarn lint
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

#### Quick overview of *src* folder

All your code will be putted in this directory. This folder already includes recommended application structure and also includes some basic components that can be reused and that will give you a quick overview how reusable components can be created and reused:

```
├── actions
│   └── index.js
├── assets
│   └── wireframes
│       └── paragraph.png
├── components
│   ├── Dashboard1
│   │   ├── Dashboard1Box1.js
│   │   ├── Dashboard1Box2.js
│   │   └── Dashboard1Box3.js
│   ├── Dashboard2
│   │   ├── Dashboard2Box1.js
│   │   └── Dashboard2Box2.js
│   ├── Dashboard3
│   │   └── Dashboard3Box1.js
│   ├── Home
│   │   ├── HomeBox1.js
│   │   ├── HomeBox2.js
│   │   ├── HomeBox3.js
│   │   └── HomeBox4.js
│   └── base
│       ├── Box.js
│       ├── Columns.js
│       ├── Nav.js
│       ├── RootRedirector.js
│       └── RoutesRenderer.js
├── constants
│   ├── actionTypes.js
│   ├── layouts.js
│   └── wireframesImages.js
├── containers
│   ├── Dashboard1Container.js
│   ├── Dashboard2Container.js
│   ├── Dashboard3Container.js
│   └── HomeContainer.js
├── middlewares
│   └── index.js
├── reducers
│   └── index.js
├── store
│   └── index.js
├── styles
│   ├── base
│   │   ├── _colors.scss
│   │   ├── _default.scss
│   │   ├── _helpers.scss
│   │   ├── _links.scss
│   │   ├── _mixins.scss
│   │   └── _variables.scss
│   ├── components
│   │   ├── base
│   │   │   ├── _box.scss
│   │   │   └── _columns.scss
│   │   ├── _app.scss
│   │   ├── _dashboard1.scss
│   │   ├── _dashboard2.scss
│   │   ├── _dashboard3.scss
│   │   ├── _home.scss
│   │   ├── _layouts.scss
│   │   └── _nav.scss
│   ├── utilities
│   │   ├── _divider.scss
│   │   └── _spacing.scss
│   ├── vendors
│   │   └── _normalize.scss
│   └── main.scss
├── utils
│   └── mediaQuery.js
├── App.js
├── App.test.js
├── index.js
├── initialState.js
├── routes.js
└── serviceWorker.js
```

### Task (Crypto currency application)

You will need to create an application that will contain main page with four widgets:

![Main page with widgets](https://raw.githubusercontent.com/adaptdk/Adapt-Academy-Frontend/master/images/main-4-widgets.png)

As you can see some of widgets have a links to dashboards that will contains more detailed information. For example `Home dashboard 1` widget have a link to `Dashboard 1` that will contain some more detailed information.

![Dashboard 1 page](https://raw.githubusercontent.com/adaptdk/Adapt-Academy-Frontend/master/images/dashboard-1.png)

#### Crypto currency application

During final task you will be responsible for creating application which will provide some information about crypto curreny:

* Crypto currency exchange graphics;
* News about crypto currency;
* and more;

TODO: More detailed describtion about final task (wireframes, clarification and so on).