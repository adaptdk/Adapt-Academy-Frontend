import React, { useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.scss";

const API_KEY = "8731e0fb";

function App() {
  // const [favoritesList, setFavoritesList] = useState([]);
  const [page, setPage] = useState("searchList");
  const [query, setQuery] = useState("Lord of the rings");
  const [searchData, setSearchData] = useState([]);
  const searchbox = useRef(null);

  const handleFavoriteClick = () => {
    setPage("favorites");
  };
  const handleSearchClick = () => {
    setPage("searchList");
    setQuery(searchbox.current.value);
  };

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${query}&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(response => {
        setSearchData(response.Search);
      });
  }, [query]);
  return (
    <div className="App">
      <div className="search">
        <input ref={searchbox} type="text" className="search__input" />
        <input
          onClick={handleSearchClick}
          type="button"
          className="search__button"
          value="Search"
        />
        <a className="search__link" href="#" onClick={handleFavoriteClick}>
          Favorites
        </a>
      </div>
      {page === "favorites" && <div>Welcome to favorites</div>}
      {page === "searchList" && (
        <div className="search-list">
          {searchData.map(searchItem => (
            <div className="search-list-item" key={searchItem.imdbID}>
              <div className="search-list-item__image-container">
                <img
                  alt="movie poster"
                  className="search-list-item__image"
                  src={searchItem.Poster}
                />
              </div>
              <div className="search-list-item__text-container">
                <h2>{searchItem.Title}</h2>
                <div className="search-list-item__year">{searchItem.Year}</div>
                <input
                  type="button"
                  className="search-list-item__favorites"
                  value="Add to facvorites"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
