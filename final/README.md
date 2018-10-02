# Adapt academy react simple starter boilerplate

* [Getting started](#getting-started):

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
> git clone git@github.com:adaptdk/Adapt-Academy-Frontend.git
> cd Adapt-Academy-Frontend/final
> npm install
> npm run start:dev
```

Open [http://localhost:4000](http://localhost:4000) in your borwser.

#### Not Familiar with Git?
Click [here](https://github.com/adaptdk/Adapt-Academy-Frontend/archive/master.zip) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

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
