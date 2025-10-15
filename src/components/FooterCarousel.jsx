import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";

const images = [slide1, slide2, slide3, slide4, slide1, slide2, slide3, slide4];

const FooterCarousel = () => {
  let [groupSize, setGroupSize] = useState(4);
  let [state , setState] = useState(true);
  useEffect(() => {
    const updateGroupSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setGroupSize(2); 
        setState(false);
      } else if (width < 768) {
        setGroupSize(3); // md
        setState(false);
      } else {
        setGroupSize(4); // lg and above
        setState(true);
      }
    };

    updateGroupSize();
    window.addEventListener("resize", updateGroupSize);
    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);

  const slides = [];
  for (let i = 0; i < images.length; i += groupSize) {
    slides.push(images.slice(i, i + groupSize));
  }

  return (
    <div className="w-[90%] max-w-screen-xl h-[40vh] sm:h-[50vh] mx-auto mt-4 relative">
      <Carousel indicators={state} interval={2000} controls={state}>
        {slides.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="flex justify-center items-center gap-4 py-4 flex-wrap">
              {group.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Slide ${index * groupSize + i + 1}`}
                  className="w-[40%] sm:w-[30%] md:w-[22%] h-[100px] sm:h-[120px] object-contain rounded-md shadow-md"
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