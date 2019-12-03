import React, { useEffect, useState, useRef } from "react";
import "./App.scss";

const API_KEY = "8731e0fb";

function App() {
  const [query, setQuery] = useState("Lord of the rings");
  const [searchData, setSearchData] = useState([]);
  const searchbox = useRef(null);
  const handleSearchClick = () => {
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
      </div>
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
              <div>{searchItem.Year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
