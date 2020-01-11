import React, { useEffect, useState, useRef} from 'react';
import logo from './logo.svg';
import './App.scss';

const API_KEY = '8731e0fb';

function App() {
  const [page, setPage] = useState('searchList');
  const [favoritesList, setFavorites] = useState ([]);
  const [query, setQuery] = useState('Lord of the rings');
  const [searchData, setSearchData] = useState([]);
  const searchBox = useRef(null);
  const handleFavoritesClick = (() =>{
    setPage('favorites');
  });
  const handleSearchClick = (() => {
    setPage('searchList');
    setQuery(searchBox.current.value);
  });
  useEffect (() => {
    fetch(`http://www.omdbapi.com/?s=${query}&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(response => setSearchData(response.Search));
  }, [query]);
  return (
    <div className="App">
      <div className="search">
        <input ref={searchBox} type="text" className="search__input" />
        <input 
        type="button" 
        className="search__button" 
        value="Search"
        onClick={handleSearchClick} 
        />
        <a onClick={handleFavoritesClick} className="search__link" href="#">Favorites</a>
      </div>
      {page === 'favorites' && <div>WELCOMEEEEEEEEE</div>
      }
      {page === "searchList" && <div className="search-list">
        {searchData.map(searchItem => (<div className="search-list-item" key={searchItem.imdbID}>
          <div className="search-list-item__image-container">
              <img 
              className="search-list-item__image" 
              src={searchItem.Poster}
              alt="" />
          </div>
          <div className="search-list-item_text-container">
              <h2>{searchItem.Title}</h2>
              <div>{searchItem.Year}</div>
              <input className="search-list-item__favorites" type="button" value="Add to favorites"/>
          </div>
        </div>))}
        
      </div>
      }
      
      
    </div>
  );
}

export default App;
