import Filter from "../../assets/icons/filter.svg";
import Image from "../../assets/images/others/service01.jpg";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Values = () => {
  const slideInVariants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };

  return (
    <>
      <section className="values">
        <div className="container wrapper">
          <div className="py-5">
            <div className=" pb-5 d-flex justify-content-center">
              <img src={Filter} alt="image" width={80} height={30} />
              <h4 className="h-100 fs-4 fw-bold">Our Core Values</h4>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xs-12 pb-5">
                <div className="image">
                  <img src={Image} alt="image" className="image w-100 h-100" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12 values-col">
                <div className="row">
                  <div className="col-6">
                    <InView triggerOnce>
                      {({ inView, ref }) => (
                        <motion.div
                          ref={ref}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          exit={{ y: 100 }}
                          variants={slideInVariants}
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <h4>Efficiency</h4>
                          <div
                            className="progress w-25"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar"></div>
                          </div>
                          <p className="pt-2">
                            We prioritize streamlined procedures and timely
                            deliveries to get your cargo moving quickly and
                            avoid delays.
                          </p>
                        </motion.div>
                      )}
                    </InView>
                  </div>
                  <div className="col-6"></div>
                  <div className="col-6"></div>
                  <div className="col-6">
                    <InView triggerOnce>
                      {({ inView, ref }) => (
                        <motion.div
                          ref={ref}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          exit={{ y: 100 }}
                          variants={slideInVariants}
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <h4>Competitive Rates</h4>
                          <div
                            className="progress w-25"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar"></div>
                          </div>
                          <p className="pt-2">
                            We offer cost-effective shipping solutions without
                            compromising on the quality of service you deserve.
                          </p>
                        </motion.div>
                      )}
                    </InView>
                  </div>
                  <div className="col-6">
                    <InView triggerOnce>
                      {({ inView, ref }) => (
                        <motion.div
                          ref={ref}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          exit={{ y: 100 }}
                          variants={slideInVariants}
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <h4>Integrity</h4>
                          <div
                            className="progress w-25"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar"></div>
                          </div>
                          <p className="pt-2">
                            We are committed to ethical business practices and
                            building trust with our clients.
                          </p>
                        </motion.div>
                      )}
                    </InView>
                  </div>
                  <div className="col-6"></div>
                  <div className="col-6"></div>
                  <div className="col-6">
                    <InView triggerOnce>
                      {({ inView, ref }) => (
                        <motion.div
                          ref={ref}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          exit={{ y: 100 }}
                          variants={slideInVariants}
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <h4>Transparency</h4>
                          <div
                            className="progress w-25"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar"></div>
                          </div>
                          <p className="pt-2">
                            We believe in clear communication and keeping you
                            informed throughout the entire shipping process.
                          </p>
                        </motion.div>
                      )}
                    </InView>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
