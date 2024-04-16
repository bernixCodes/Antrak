/* eslint-disable react/prop-types */
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";

const Carousel = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const goNext = () => {
    const isLastSlide = index === slides.length - 1;
    if (isLastSlide) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const autoSlide = () => {
    goNext();
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 7000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          <img
            key={index}
            src={`${slides[index].url}`}
            alt={`${slides[index].title}`}
          />
        </div>
        <div className="carousel-text">
          <div>
            <Typewriter
              options={{
                strings: ["Your Trusted Partner For Smooth International Shipping"],
                autoStart: true,
                loop: false,
                deleteSpeed: Infinity,
                cursor: "",
                delay: 150,
                pauseFor: 2000,
                hideCursorOnComplete: true,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
