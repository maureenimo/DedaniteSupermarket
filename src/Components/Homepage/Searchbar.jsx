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

 