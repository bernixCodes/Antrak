import { useState, useEffect } from "react";
import Ribbon from "../../assets/icons/ribbon.svg";
import Cargo from "../../assets/icons/cargo.svg";
import Rating from "../../assets/icons/rating.svg";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Counter = () => {
  const [counts, setCounts] = useState([20, 15, 0]);

  const counter = (index, min, max, interval) => {
    let timeoutId;
    for (let i = min; i <= max; i++) {
      timeoutId = setTimeout(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = i;
          return newCounts;
        });
      }, (i - min) * interval);
    }
    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    return () => {};
  }, []);

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      clippath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clippath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        duration: 10,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <>
      <section className="bg-white counter">
        <div className="container wrapper">
          <div className="py-5">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <InView threshold={0.3} triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={fadeInVariants}
                      onAnimationComplete={() => {
                        if (inView) counter(0, 20, 500, 10);
                      }}
                    >
                      <div className="w-100">
                        <img
                          src={Rating}
                          alt="image"
                          width={100}
                          height={100}
                          className="d-flex mx-auto my-auto"
                        />
                      </div>
                      <h1 className="text-dark text-center p-2 m-0">
                        {counts[0]}
                      </h1>
                      <p className="fs-4 m-0 text-center">
                        Satisfied Clients Served
                      </p>
                    </motion.div>
                  )}
                </InView>
              </div>
              <div className="col-md-4 col-sm-6">
                <InView threshold={0.3} triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={fadeInVariants}
                      onAnimationComplete={() => {
                        if (inView) counter(1, 15, 300, 20);
                      }}
                    >
                      <div className="w-100">
                        <img
                          src={Cargo}
                          alt="image"
                          width={100}
                          height={100}
                          className="d-flex mx-auto my-auto"
                        />
                      </div>
                      <h1 className="text-dark text-center p-2 m-0">
                        {counts[1]}
                      </h1>
                      <p className="fs-4 m-0 text-center">
                        Efficient Shipments Delivered
                      </p>
                    </motion.div>
                  )}
                </InView>
              </div>
              <div className="col-md-4 col-sm-6">
                <InView threshold={0.3} triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={fadeInVariants}
                      onAnimationComplete={() => {
                        if (inView) counter(2, 0, 10, 300);
                      }}
                    >
                      <div className="w-100">
                        <img
                          src={Ribbon}
                          alt="image"
                          width={100}
                          height={100}
                          className="d-flex mx-auto my-auto"
                        />
                      </div>
                      <h1 className="text-dark text-center p-2 m-0">
                        {counts[2]}
                      </h1>
                      <p className="fs-4 m-0 text-center">
                        Years of Experience
                      </p>
                    </motion.div>
                  )}
                </InView>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
