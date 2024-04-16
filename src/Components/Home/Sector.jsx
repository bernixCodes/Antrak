import Filter from "../../assets/icons/filter.svg";
import MainImage from "../../assets/images/gallery/image13.jpeg";
import Price from "../../assets/icons/price-target.svg";
import Track from "../../assets/icons/tracking.svg";
import Delivery from "../../assets/icons/delivery.svg";
import Support from "../../assets/icons/customer-support.svg";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Sector = () => {
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <>
      <section className="sector">
        <div className="container wrapper">
          <div className="py-5">
            <div className="pb-5 d-flex justify-content-center">
              <img src={Filter} alt="image" width={80} height={30} />
              <h4 className="h-100 fs-4 fw-bold">Why Choose Us</h4>
            </div>
            <InView threshold={0.2} triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeInVariants}
                >
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="row">
                        <div className="col-xl-12 col-md-6">
                          <div className="card text-bg-dark mb-3">
                            <div className="card-header">
                              <img
                                src={Price}
                                alt="image"
                                width={50}
                                height={50}
                              />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">Affordable Pricing</h5>
                              <p className="card-text">
                                We offer competitive shipping rates without
                                compromising on quality. We believe in
                                transparent pricing, so you will get a clear
                                quote upfront. This allows you to make informed
                                decisions and budget confidently for your
                                shipping needs.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                          <div className="card text-bg-dark mb-3">
                            <div className="card-header">
                              <img
                                src={Delivery}
                                alt="image"
                                width={50}
                                height={50}
                              />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">Fast Delivery</h5>
                              <p className="card-text">
                                We prioritize efficient logistics and
                                established partnerships to ensure your shipment
                                arrives promptly. We understand the importance
                                of on-time deliveries, so you can be confident
                                your cargo reaches its destination within the
                                promised timeframe.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="row h-100">
                        <div className="col-xl-12 col-md-6 d-flex my-auto mx-auto">
                          <img
                            src={MainImage}
                            alt="image"
                            className="main-image d-flex my-auto rounded mb-3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="row">
                        <div className="col-xl-12 col-md-6">
                          <div className="card text-bg-dark mb-3">
                            <div className="card-header">
                              <img
                                src={Track}
                                alt="image"
                                width={50}
                                height={50}
                              />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">Shipment Updates</h5>
                              <p className="card-text">
                                We understand the importance of staying
                                informed. Our dedicated team will proactively
                                keep you updated on the status of your shipment
                                throughout its journey. You will receive regular
                                communication regarding its location and
                                estimated arrival time.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12 col-md-6">
                          <div className="card text-bg-dark mb-3">
                            <div className="card-header">
                              <img
                                src={Support}
                                alt="image"
                                width={50}
                                height={50}
                              />
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">
                                24/7 Customer Service
                              </h5>
                              <p className="card-text">
                                Our dedicated customer service team is available
                                around the clock to answer your questions,
                                address any concerns, and provide expert
                                guidance throughout the shipping process. We are
                                here to ensure a smooth and stress-free
                                experience for you.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </InView>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sector;
