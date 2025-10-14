import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../assets/slide1.png"; 
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";

const images = [slide1, slide2, slide3, slide4, slide1, slide2, slide3, slide4];

const FooterCarousel = () => {
  const slides = [];
  for (let i = 0; i < images.length; i += 4) {
    slides.push(images.slice(i, i + 4));
  }

  return (
    <div className="w-[65%] mx-auto mt-4 relative">
      <style>
        {`
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            filter: brightness(0) invert(0); /* makes arrows darker */
          }
        `}
      </style>

      <Carousel indicators={false} interval={2000} controls={true}>
        {slides.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="flex justify-center items-center gap-3 py-2">
              {group.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Slide ${index * 4 + i + 1}`}
                  className="w-[18%] h-[80px] object-contain rounded-md shadow-sm"
                />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FooterCarousel;
