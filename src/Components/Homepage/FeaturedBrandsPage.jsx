import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Input } from "./Input";
import './FVC.css';



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
