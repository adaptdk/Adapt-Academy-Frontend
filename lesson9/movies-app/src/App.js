import React, { useEffect, useState, useRef } from "react";
import { Home } from "./pages/home/home";
import { Favorites } from "./pages/favorites/favorites";
import { SearchList } from "./pages/searchList/SearchList";
import logo from "./logo.svg";
import "./App.scss";
import  {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";


function App() {
  const API_KEY = "8731e0fb";
  const [query, setQuery] = useState("Lord of the rings");
  const [searchData, setSearchData] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  const [page, setPage] = useState("searchList");
  const searchbox = useRef(null);

  const handleSearchClick = () => {
    setPage("searchList");
    setQuery(searchbox.current.value);
  };

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  return (
    <div className="App">
      <Router>
      <div className="search">
        <input ref={searchbox} type="text" className="search__input" onChange={handleInputChange} />
        <Link to={`/searchlist/${query}`}>
          <input
            onClick={handleSearchClick}
            type="button"
            className="search__button"
            value="Search"
          />
        </Link>
        <Link className="search__link" to="/favorites">
          Favorites
        </Link>
      </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/searchlist/:searchQuery">
            <SearchList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
