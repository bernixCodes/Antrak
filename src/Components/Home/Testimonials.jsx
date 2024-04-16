/* eslint-disable react/prop-types */
import Filter from "../../assets/icons/filter-white.svg";
import Left from "../../assets/icons/arrow-left.svg";
import Right from "../../assets/icons/arrow-right.svg";
import { useState, useEffect } from "react";

const Testimonials = ({ testimonials }) => {
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState(false);

  const goPrevious = () => {
    const isFirstSlide = index === 0;
    if (isFirstSlide) {
      setIndex(testimonials.length - 1);
    } else {
      setIndex(index - 1);
    }
    setAnimation(true); 
  };
  
  const goNext = () => {
    const isLastSlide = index === testimonials.length - 1;
    if (isLastSlide) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setAnimation(true);
  };

  const autoSlide = () => {
    goNext();
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  const handleAnimation = () => {
    setAnimation(false);
  };

  return (
    <>
      <section className="testimonials">
        <div className="container wrapper">
          <div className="py-5">
            <div className="pb-5 d-flex justify-content-center">
              <img src={Filter} alt="image" width={80} height={30} />
              <h4 className="h-100 fs-4 fw-bold text-white">
                Our Clients Says
              </h4>
            </div>
            <div className={`row d-flex justify-content-center testimonial-text slide ${animation ? 'slide-in' : ''}`} onAnimationEnd={handleAnimation}>
              <div className="col-xl-8 col-sm-12 h-100">
                <p className="fst-italic text-center text-white">
                  {testimonials[index].text}
                </p>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h6 className="text-white">{testimonials[index].user}</h6>
                  <span className="text-white">
                    {testimonials[index].location}
                  </span>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8 col-sm-12 d-flex justify-content-between controls">
                <img
                  src={Left}
                  alt="image"
                  width={30}
                  height={30}
                  onClick={goPrevious}
                />
                <img
                  src={Right}
                  alt="image"
                  width={30}
                  height={30}
                  onClick={goNext}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
