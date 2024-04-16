import Filter from "../../assets/icons/filter.svg";
import Team01 from "../../assets/images/others/team01.jpg";
import { Link } from "react-router-dom";
import Facebook from "../../assets/icons/facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Twitter from "../../assets/icons/twitter-x.svg";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Team = () => {
  const slideInVariants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };

  return (
    <>
      <section className="bg-white team">
        <div className="container wrapper">
          <div className="py-5">
            <div className="pb-2 d-flex justify-content-center">
              <img src={Filter} alt="image" width={80} height={30} />
              <h4 className="h-100 fs-4 fw-bold">Meet The Team</h4>
            </div>
            <p className="text-center fs-4 pb-4">
              Get to know the management team
            </p>
            <div className="row">
              <div className="col-lg-3 col-xs-12 col-sm-6 col-md-6">
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
                      <div className="card mb-5 border-0">
                        <img
                          src={Team01}
                          className="card-img-top"
                          alt="image"
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="card-title">Salia Mohammed</h5>
                              <p className="card-text p-0 m-0">Manager</p>
                            </div>
                            <div className="d-flex flex-column social-icons">
                              <Link to="/">
                                <img
                                  src={Instagram}
                                  alt="instagram"
                                  width={25}
                                  height={25}
                                />
                              </Link>
                              <Link to="/">
                                <img
                                  src={Twitter}
                                  alt="twitter"
                                  width={25}
                                  height={25}
                                />
                              </Link>
                              <Link to="/">
                                <img
                                  src={Facebook}
                                  alt="facebook"
                                  width={25}
                                  height={25}
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </InView>
              </div>
              <div className="col-lg-3 col-xs-12 col-sm-6 col-md-6">
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
                      <div className="card mb-5 border-0">
                        <img
                          src={Team01}
                          className="card-img-top"
                          alt="image"
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="card-title">Salia Mohammed</h5>
                              <p className="card-text p-0 m-0">
                                Procurement Manager
                              </p>
                            </div>
                            <div className="d-flex flex-column social-icons">
                              <Link to="/">
                                <img
                                  src={Instagram}
                                  alt="instagram"
                                  width={25}
                                  height={25}
                                />
                              </Link>
                              <Link to="/">
                                <img
                                  src={Twitter}
                                  alt="twitter"
                                  width={25}
                                  height={25}
                                />
                              </Link>
                              <Link to="/">
                                <img
                                  src={Facebook}
                                  alt="facebook"
                                  width={25}
                                  height={25}
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </InView>
              </div>
              <div className="col-lg-3 col-xs-12 col-sm-6 col-md-6">
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
                      <div className="card mb-5 border-0">
                        <img
                          src={Team01}
                          className="card-img-top"
                          alt="image"
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="card-title">Salia Mohammed</h5>
                              <p className="card-text p-0 m-0">
                                Marketing Manager
                              </p>
                            </div>
                            <div className="d-flex flex-column social-icons">
                              <Link to="/">
                                <img
                                  src={Instagram}
                                  alt="instagram"
                                  width={25}
                                  height={25}
                                />
                              </Link>
                              <Link to="/">
                                <img
                                  src={Twitter}
                                  alt="twitter"
                                  width={25}
                                  height={25}
                                />
                              </Link>
                              <Link to="/">
                                <img
                                  src={Facebook}
                                  alt="facebook"
                                  width={25}
                                  height={25}
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </InView>
              </div>
              <div className="col-lg-3 col-xs-12 col-sm-6 col-md-6">
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
                      <div className="card border-0">
                        <img
                          src={Team01}
                          className="card-img-top"
                          alt="image"
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div>
                              <h5 className="card-title">Salia Mohammed</h5>
                              <p className="card-text p-0 m-0">
                                Warehouse Manager
                              </p>
                            </div>
                            <div className="d-flex flex-column social-icons">
                              <Link to="/">
                                <img
                                  src={Instagram}
                                  alt="instagram"
                                  width={25}
                                  height={25}
                                />
                              </Link>
                              <Link to="/">
                                <img
                                  src={Twitter}
                                  alt="twitter"
                                  width={25}
                                  height={25}
                                />
                              </Link>
                              <Link to="/">
                                <img
                                  src={Facebook}
                                  alt="facebook"
                                  width={25}
                                  height={25}
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Team;
