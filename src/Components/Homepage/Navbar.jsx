import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import SearchBar from "./Searchbar";
import "./Navbar.css";
import "./Input.css";
import SearchResultPage from "./SearchResultPage";

export const Navbar = ({cart, customer, setCustomer, handleAddToCart, resetSearchResults}) => {

  const [resetSearchKey, setResetSearchKey] = React.useState(0);
  const navigate = useNavigate()
  const location = useLocation();
  const [notification,setNotification] =useState(null);

  const handleLogout = () => {
    fetch('https://dedanite-online.onrender.com/logout', {
      method:'DELETE'
    })
    .then((response) => response.json())
    .then((data) => {
      setNotification("Logged out!!")
      setCustomer(null)
      navigate('/')

      setTimeout(() => {
        setNotification(null)
      }, 2000);
    })

  }

  const handleOrder = (event) => {
    const selectedOption = event.target.value

    if (selectedOption === 'myorders'){
      navigate('/myorders')
    }
  }
  return (
    <div className="navbar_navbar">
      <div className="navbar_logo">
        <Link to="/" onClick={() => setResetSearchKey((prevKey) => prevKey + 1)}>
          <img src="https://i.im.ge/2024/02/08/cLhGuW.logo-color.png" alt="Goldworth logo" />
        </Link>
      </div>
      <div className="navbar_links">
      <Link to="/all-categories" 
          onClick={() => setResetSearchKey((prevKey) => prevKey + 1)}> 
          All Categories
        </Link>
        <Link to="/top-categories" 
          onClick={() => setResetSearchKey((prevKey) => prevKey + 1)}> 
          Top Categories
        </Link>
