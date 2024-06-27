import React, { useEffect, useState } from 'react';
import "./FruitsPageVegetables.css"
import Details from './Details';

const FruitsVegetablesPage = ({handleAddToCart}) => {
  const [fruitsveg, setfruitsveg] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

 useEffect(() => {
  fetch('https://dedanite-online.onrender.com/products')
  .then((response) => response.json())
  .then((data) => {
    const products = data.filter((item) => item.category == 'FruitsVeg')
    setfruitsveg(products)
    setLoading(true)
  })
 }, [])


 const filteredProducts = fruitsveg
   .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
   .filter(product => selectedPriceRange === 'All' || (selectedPriceRange === 'Low' && product.price < 1) || (selectedPriceRange === 'High' && product.price >= 1));


 return (
  <>
   <div className="container">
     <h1>Fruits & Vegetables</h1>


     <div className="content">
       {/* Filter Card */}
       <div className="card filter-card">
         <div className="filter-section">
           <h2>Filters</h2>
           <div>
             <label>Category:</label>
             <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
               <option value="All">All</option>
               <option value="Fruits">Fruits</option>
               <option value="Vegetables">Vegetables</option>
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
            details={product.details}
            imageurl={product.imageurl}
            handleAddToCart={handleAddToCart}
          />
         ))}
       </div>
   </>
 );
};


export default FruitsVegetablesPage;

