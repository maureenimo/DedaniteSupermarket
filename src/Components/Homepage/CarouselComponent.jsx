// CarouselComponent.js
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Details } from "./Details";

const CustomCarousel = ({ data }) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 5,
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

  const details = data.map((item) => (
    <Details
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
      weight={item.weight}
    />
  ));

  return <Carousel responsive={responsive}>{details}</Carousel>;
};

export default CustomCarousel;