import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
// import './Container.css'
import './FVC.css';
import { Details } from "./Details";

const FruitsVegPage = ({handleAddToCart}) => {

  const [fruits, setFruirts] = useState([])
  const [loading, setLoading] = useState(true)

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  useEffect(() => {
    fetch('https://dedanite-online.onrender.com/products')
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.filter((item) => item.category == 'Fruits')
      setFruirts(filteredData)
      setLoading(true)
    })
  }, [])

  const details = fruits.map((item) => (
    <Details
      key={item.id}
      id={item.id}
      name={item.name}
      imageurl={item.imageurl}
      price={item.price}
      details={item.details}
      weight={item.weight}
      handleAddToCart={handleAddToCart}
    />
    
  ));
 
  return (
    <div className="Container">
      <div className="shop-from-top-categories">
        <div className="top-categories-frame">
          <div className="title">
            <div className="shop-from-top-categories-parent">
              <div className="heading-wrapper">
                <h1 className="shop-from-top-container">
                  <span>{`Fruits and  `}</span>
                  <span className="top-categories">Vegetables</span>
                </h1>
              </div>
              <div className="line-div" />
            </div>
            <div className="title-child" />
          </div>
        </div>
        <Carousel responsive={responsive}>{details}</Carousel>
      </div>
    </div>
  );
};

export default FruitsVegPage;


