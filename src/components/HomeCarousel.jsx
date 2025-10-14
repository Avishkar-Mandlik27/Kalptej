import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../assets/HomeSlider1.jpg";
import img2 from "../assets/HomeSlider2.jpg";
import img3 from "../assets/HomeSlider3.jpg";
import img4 from "../assets/HomeSlider4.jpg";

const quotes = [
  "“Design is not just what it looks like and feels like. Design is how it works.” ",
  "“Your home should tell the story of who you are, and be a collection of what you love.”",
  "“The details are not the details. They make the design.”",
  "“Simplicity is the ultimate sophistication in interior design.”"
];

const HomeCarousel = () => {
  return (
    <div className="w-full h-[80vh] overflow-hidden">
      <Carousel interval={2500} controls indicators fade>
        {[img1, img2, img3, img4].map((img, i) => (
          <Carousel.Item key={i} className="h-[70vh] relative">
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-[70vh] object-cover brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                {quotes[i]}
              </h3>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
