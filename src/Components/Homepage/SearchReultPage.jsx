import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Details from "./Details";
import './SearchResultPage.css';

function SearchResultPage({ handleAddToCart }) {
  const location = useLocation();
  const filteredData = location.state ? location.state.filteredData : [];
  const navigate = useNavigate();

  return (
    <div className="SearchResultPage-searchResultPage">
      {filteredData.map((value) => (
        <Details key={value.id}>
          <div className="SearchResultPage-card">
            <img src={value.imageurl} alt={value.name} />
            <label>{value.name}</label>
            <div className='Footer SearchResultPage-footer'>
              <div className="SearchResultPage-card-details">
                <p>Category: {value.category}</p>
                <p>Weight: {value.weight}</p>
                <p>Price: Kshs.{value.price}</p>
                <button onClick={() => handleAddToCart(value)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </Details>
      ))}
    </div>
  );
}

export default SearchResultPage;