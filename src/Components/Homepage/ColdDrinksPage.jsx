import React, { useEffect, useState } from 'react';
import "./ColdDrinksPage.css"
import Details from './Details';

const ColdDrinksPage = ({handleAddToCart}) => {
  const [drinks, setDrink] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  useEffect(() => {
    fetch('https://dedanite-online.onrender.com/products')
    .then((response) => response.json())
    .then((data) => {
      const products = data.filter((item) => item.category == 'Cold Drinks')
      setDrink(products)
    })
  }, [])

  const filteredProducts = drinks
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .filter(product => selectedPriceRange === 'All' || (selectedPriceRange === 'Low' && product.price < 1) || (selectedPriceRange === 'High' && product.price >= 1));

  return (
    <>
    <div className="container">
      <h1>Cold Drinks & Juices</h1>

      <div className="content">
        {/* Filter Card */}
        <div className="card filter-card">
          <div className="filter-section">
            <h2>Filters</h2>
            <div>
              <label>Category:</label>
              <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Cold Drinks">Cold Drinks</option>
                <option value="Juices">Juices</option>
              </select>
            </div>
            <div>
              <label>Price Range:</label>
              <select value={selectedPriceRange} onChange={e => setSelectedPriceRange(e.target.value)}>
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        
      </div>
    </div>
    {/* Product Cards */}
    <div className="card-container">
        {filteredProducts.map((product) => (
          <Details 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageurl={product.imageurl}
            details={product.details}
            handleAddToCart={handleAddToCart}
          />
         ))}
        </div>
    </>
  );
};

export default ColdDrinksPage;