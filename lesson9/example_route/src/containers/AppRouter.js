import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => {
  return (
    <h2>About</h2>
  );
};
const NoMatch = () => <h2>Any</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>


      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about/:test?" component={About} />
        <Route component={NoMatch} />
      </Switch>

    </div>
  </Router>
);

export default AppRouter;
