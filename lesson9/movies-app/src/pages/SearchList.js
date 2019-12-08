import React, { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom';

const SearchList = () => {

    const API_KEY = "8731e0fb";

    const [searchData, setSearchData] = useState([]);
    const {searchQuery} = useParams();



    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${searchQuery}&apiKey=${API_KEY}`)
          .then(response => response.json())
          .then(response => {
            setSearchData(response.Search);
          });
      }, [searchQuery]);


      return (             
      
      <div className="search-list">{searchData.map(searchItem => (
        <div className="search-list-item" key={searchItem.imdbID}>
          <div className="search-list-item__image-container">
            <img alt="movie poster" className="search-list-item__image" src={searchItem.Poster} />
          </div>
          <div className="search-list-item__text-container">
            <h2>{searchItem.Title}</h2>
            <div className="search-list-item__year">{searchItem.Year}</div>
            <input type="button" className="search-list-item__favorites" value="Add to facvorites" />
          </div>
        </div>
      ))}
    </div>
      )
}

export { SearchList };
