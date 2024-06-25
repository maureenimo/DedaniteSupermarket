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

  