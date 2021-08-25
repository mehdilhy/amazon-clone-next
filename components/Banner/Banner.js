import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Links from "./links";
const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-400 to-transparent bottom-0" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2000}
      >
        <div>
          <img loading="lazy" src={Links.first} />
        </div>
        <div>
          <img loading="lazy" src={Links.second} />
        </div>
        <div>
          <img loading="lazy" src={Links.third} />
        </div>
        <div>
          <img loading="lazy" src={Links.fourth} />
        </div>
        <div>
          <img loading="lazy" src={Links.fifth} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
