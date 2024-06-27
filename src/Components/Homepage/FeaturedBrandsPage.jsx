import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Input } from "./Input";
import './FVC.css';
// static images
import nestleImage from "../Assets/nestleproductphoto.jpg";
import pAndGImage from "../Assets/png.jpg";
import unileverImage from "../Assets/unilever.jpg";
import jAndJImage from "../Assets/jnj.png";
import samsungImage from "../Assets/samsung.jpg";
import panasonicImage from "../Assets/panasonic.jpg";

const FeaturedBrandsPage = () => {
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

  const BrandsData =[
    {
        id:1,
        imageurl: nestleImage,
        name:"Nestle",    
    },
    {
        id:2,
        imageurl: pAndGImage,
        name:"Proctor and Gamble",
        
    },
    {
        id:3,
        imageurl: unileverImage,
        name:"Unilever",
        
    },
    {
        id:4,
        imageurl: jAndJImage,
        name:"Johnson & Johnson",

    },
    {
        id:5,
        imageurl: samsungImage,
        name:"Samsung",
        
    },
    
    {
        id:7,
        imageurl: panasonicImage,
        name:"Panasonic",
        
    },
]

const input = BrandsData.map((item) => (
    <Input
      key={item.id}
      name={item.name}
      url={item.imageurl}
      
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
                  <span>{`Featured `}</span>
                  <span className="top-categories">Brands</span>
                </h1>
              </div>
              <div className="line-div" />
            </div>
            <div className="title-child" />
          </div>
        </div>
        <Carousel responsive={responsive}>{input}</Carousel>
      </div>
    </div>
  );
  };


export default FeaturedBrandsPage;



