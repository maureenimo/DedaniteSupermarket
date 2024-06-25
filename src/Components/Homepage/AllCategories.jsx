import React, { useEffect, useState } from 'react';
import "./AllCategories.css"
import Details from './Details';


const AllCategoriesPage = ({handleAddToCart}) => {
  const [allcategories, setAllcategories] = useState([])
 const [selectedCategory, setSelectedCategory] = useState('All');
 const [selectedPriceRange, setSelectedPriceRange] = useState('All');

 useEffect(() => {
  fetch('https://dedanite-online.onrender.com/products')
  .then((response) => response.json())
  .then((data) => {
    setAllcategories(data)
  })
 }, [])
  

 const filteredProducts = allcategories
   .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
   .filter(product => selectedPriceRange === 'All' || (selectedPriceRange === 'Low' && product.price < 1) || (selectedPriceRange === 'High' && product.price >= 1));

  
   const details = filteredProducts.map((product) => (
    <Details
      key={product.id}
      id={product.id}
      name={product.name}
      imageurl={product.imageurl}
      price={product.price}
      details={product.details}
      weight={product.weight}
      handleAddToCart={handleAddToCart}
    />
  ));


 return (
  <>
   <div className="container">
     <h1>All Products</h1>


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
               <option value="Snacks">Snacks</option>
               <option value="Munchies">Munchies</option>
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
            handleAddToCart={handleAddToCart}
          />
         ))}
       </div>
       
   </>
 );
};


export default AllCategoriesPage;

