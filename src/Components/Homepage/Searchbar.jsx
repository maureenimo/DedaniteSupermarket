// SearchBar.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
// import Details from './Details';
import './Searchbar.css';

function SearchBar({ handleAddToCart, resetSearchKey }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dedanite-online.onrender.com/products')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [resetSearchKey]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    // Check if the search word is not empty
    if (searchWord.trim() !== '') {
      const newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });

      setFilteredData(newFilter);
      navigate({ pathname: '/search', state: { filteredData: newFilter } });
    } else {
      // If search word is empty, reset filteredData
      setFilteredData([]);
      // Redirect to the home page
      navigate('/');
    }
  };

  const clearInput = () => {
    // Redirect to the home page when clearing the input
    navigate('/');
    setFilteredData([]);
    setWordEntered('');
  };

  const resetSearchResults = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <div className="search-search">
      <div className="search-searchInputs">
        <input
          type="text"
          placeholder="Enter search word..."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 ? (
        <div className="search-searchResultPage">
          {filteredData.map((value) => (
            <div Details>
              <div key={value.id} className="card">
                <img src={value.imageurl} alt={value.name} />
                <label>{value.name}</label>
                <div className="card-details">
                  <p>Category: {value.category}</p>
                  <p>Weight: {value.weight}</p>
                  <p>Price: Kshs.{value.price}</p>
                  <button onClick={() => handleAddToCart(value)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
