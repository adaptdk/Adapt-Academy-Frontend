import React,  {useEffect, useState, useRef} from 'react';
import logo from './logo.svg';
import './App.scss';

const API_KEY = "8731e0fb";

function App() {
  const [favList, setFavList] = useState([]);
  const [page, setPage] = useState("search");

  const [query, setQuery] = useState("Lord");
  const [searchData , setSearchData] = useState([]);
  const searchBox = useRef(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${query}&apiKey=${API_KEY}`)
      .then(response => response.json())
        .then(res => {setSearchData(res.Search); console.log(res)})
  }, [query]);

  const handleQueryChange= (e) => setQuery(searchBox.current.value);


  const handlePage = () => setPage("favourites");


  return (
    <div className="App">
    
    <h1>Welcome</h1>
    <label>Enter film</label><br></br>
    <input ref={searchBox}className="input-item"></input>
    <button onClick={() => handleQueryChange()}>Submit</button>

    <a onClick={handlePage}> Favourites </a>
    
    {
        page == "favourites" && (
          <div> Hello world </div>
      
        )
    }

    {
      page == "search" && (
        <div className="search-list">
      { 
      searchData && searchData.map(searchItem => (
        <div>
          <div className="search-list-item">
            <div className="search-list-item__image-container">
                <img src= { searchItem.Poster }/>
            </div>
            <div className="search-list-item__text-container">
                <h2>{searchItem.Title}</h2>
                <div>
                  <h3>{searchItem.Year}</h3>
                </div>
                <button>Add to Favourites</button>
            </div>
          </div>
        </div>
      )) 
      }
    </div>
      )
    }


 
    



    
    </div>

    

  );
}

export default App;
