import React, {useState, useEffect} from 'react';
import './App.scss';

const App = () => {

const [searchData, setData] = useState([]);
const searchBox = useRef(null)

const handleSearchClick = (() => {

})

  const API_KEY = "8731e0fb";

  useEffect (() => {
    const search = "Narcos: Mexico";
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}&`)
    .then(res => res.json())
    .then(res => setData(res.Search));
  }, []);

  return (
    <div className="search">
      <input className="search-input__text" type="text"></input>
      <input className="search-input__button" type="button" value="search" onclick={handleSearchClick()}></input>
      <div className="search-list">
        {searchData.map(searchItem => (
        <div className="search-list-item" key={searchItem.imdbID}>
          <div className="search-list-item__img">
            <img
            src={searchItem.Poster}>
            </img>
            <div className="search-list-item__text">
              <h1 className="search-list-item__text-title">Title</h1>
              <h1 className="search-list-item__text-year">2019</h1>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
