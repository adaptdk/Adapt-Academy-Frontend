import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Home} from './pages/Home';
import {SearchList} from './pages/SearchList';
import "./App.scss";



function App() {
  // const [favoritesList, setFavoritesList] = useState([]);
  const [page, setPage] = useState("searchList");
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  const searchbox = useRef(null);

  const handleFavoriteClick = () => {
    setPage("favorites");
  };
  const handleSearchClick = () => {
    setPage("searchList");
    setQuery(searchbox.current.value);
  };

  const handleSearchQuery = () => {
    setQuery(searchbox.current.value)
  }


  return (
    <div className="App">
      <Router>
        <div className="search">
        <input ref={searchbox} type="text" className="search__input" onChange={handleSearchQuery} />
        <Link className="search__link" to={"/search/" + query}>
        <input onClick={handleSearchClick} type="button" className="search__button" value="Search" />
        </Link>
          
          
          <Link className="search__link" to="/favorites">Favorite</Link>
        </div>
        <Switch>
          <Route path="/favorites">
            <Home />
          </Route>
          <Route path="/search/:searchQuery">
            <SearchList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
