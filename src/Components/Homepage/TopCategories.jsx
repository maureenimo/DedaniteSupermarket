import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import Product  from "./Product";
import Details from "./Details";
import './FVC.css';

const TopCategoriesPage = () => {

  const [produceData, setProduceData] = useState([])
  

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

  const productData =[
    {
      id:1,
      imageurl: "https://pfst.cf2.poecdn.net/base/image/e9c5ef8326d76d35b14817a7d2ea81841f8c8a6101d6a500aed1f6e2df97e595?w=1024&h=1024&pmaid=31626058",
      name:"All Categories",
      path:"/all-categories"
      

  },
    {
        id:2,
        imageurl: "https://qph.cf2.poecdn.net/main-sdxl_53905d0537125ce219396f7b5fd6cbee8d8b3b96ebe876b8684aa60dba5b9dee.png?w=1024&h=1024",
        name:"Fruits and Vegetables",
        path:"/all-fruits"

    },

    {
        id:3,
        imageurl: "https://qph.cf2.poecdn.net/main-sdxl_1c33ae4bb7a623264fcdaa43a117aa3990d2df230b6cef33b678ee3df6235140.png?w=1024&h=1024",
        name:"Cold drinks and juices",
        path:"/all-drinks"

    },
    {
        id:4,
        imageurl: "https://qph.cf2.poecdn.net/main-sdxl_817fe54400afc2221413404a4d0f2a814db2fb22a9e2248f8635646d7a36a00c.png?w=1024&h=1024",
        name:"Snacks and Munchies",
        path:"/all-snacks"
        

    }
]

const products = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      path={item.path}
    />
  
));




return (
  <div className="HomePage">
    <div className="shop-from-top-categories">
      <div className="top-categories-frame">
        <div className="title">
          <div className="shop-from-top-categories-parent">
            <div className="heading-wrapper">
              <h1 className="shop-from-top-container">
                <span>{`Shop From `}</span>
                <span className="top-categories">Top Categories</span>
              </h1>
            </div>
            <div className="line-div" />
          </div>
          <div className="title-child" />
        </div>
      </div>
      <Carousel responsive={responsive}>{products}</Carousel>
    </div>
  </div>
);
};

const FeaturedBrandsPage = () => {

  const [featuredData, setFeaturedData] = useState([])
  
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
    fetch('/featuredbrands')
    .then((response) => response.json())
    .then((data) => {
      setFeaturedData(data)
    })
  }, [])



const details = featuredData.map((item) => (
  <Details
    key={item.id}
    name={item.name}
    url={item.imageurl}
  />
));

return (
  <div className="HomePage">
    <h1>Featured Brands</h1>
    <Carousel responsive={responsive}>{details}</Carousel>
  </div>
);
};

export { TopCategoriesPage, FeaturedBrandsPage };




