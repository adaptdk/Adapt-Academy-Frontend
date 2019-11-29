import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/home/home";
import { Favorites } from "./pages/favorites/favorites";
import { Search } from "./pages/search/search";

function App() {
  const [query, setQuery] = useState("Lord of the rings");

  const searchbox = useRef(null);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <Router>
        <div className="search">
          <input
            ref={searchbox}
            type="text"
            onChange={handleChange}
            className="search__input"
          />
          <Link to={`/search/${query}`}>
            <input type="button" className="search__button" value="Search" />
          </Link>
          <Link className="search__link" to="/favorites">
            Favorites
          </Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="favorites">
            <Favorites />
          </Route>
          <Route path="/search/:searchQuery">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
