import Image from "../../assets/images/others/service-main.jpg";
import Location from "../../assets/icons/location-contact.svg";
import Phone from "../../assets/icons/phone-contact.svg";
import Filter from "../../assets/icons/filter.svg";
import Email from "../../assets/icons/message-contact.svg";
import { Link } from "react-router-dom";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Details = () => {
  const slideInVariants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };

  return (
    <>
      <section className="bg-white details">
        <div className="container wrapper w-100 h-100">
          <div className="py-5">
            <div className="row pt-5 p-0 m-0">
              <div className="col-lg-6 col-xs-12">
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      exit={{ y: 100 }}
                      variants={slideInVariants}
                      transition={{ duration: 2, type: "fade", stiffness: 50 }}
                    >
                      <div className="pb-5 d-flex">
                        <img src={Filter} alt="image" width={80} height={30} />
                        <h4 className="h-100 fs-4 fw-bold">Get In Touch</h4>
                      </div>
                      <p className="text-justify pb-4 border-bottom">
                        We are here to assist you with your export needs. Don&#39;t
                        hesitate to get in touch with us for reliable and
                        efficient service tailored to your exporting needs.
                      </p>
                    </motion.div>
                  )}
                </InView>
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      exit={{ y: 100 }}
                      variants={slideInVariants}
                      transition={{ duration: 2, type: "fade", stiffness: 50 }}
                    >
                      <div className="d-flex pt-4">
                        <img
                          src={Location}
                          alt="location"
                          width={40}
                          height={40}
                          className="d-flex my-auto"
                        />
                        <Link
                          to="/"
                          className="ps-5 d-flex align-items-center justify-content-center text-decoration-none text-dark"
                        >
                          <p className="p-0 m-0">
                            4018 E 12th Avenue Tampa, FL, 33605
                          </p>
                        </Link>
                      </div>
                      <div className="d-flex pt-4">
                        <img
                          src={Phone}
                          alt="call"
                          width={40}
                          height={40}
                          className="d-flex my-auto"
                        />
                        <Link
                          to="tel:(941) -276-8532"
                          className="ps-5 d-flex align-items-center justify-content-center text-decoration-none text-dark"
                        >
                          <p className="p-0 m-0">(941) -276-8532</p>
                        </Link>
                      </div>
                      <div className="d-flex py-4">
                        <img
                          src={Email}
                          alt="email"
                          width={40}
                          height={40}
                          className="d-flex my-auto"
                        />
                        <Link
                          to="mailto:antrakexport@gmail.com"
                          className="ps-5 d-flex align-items-center justify-content-center text-decoration-none text-dark"
                        >
                          <p className="p-0 m-0">antrakexport@gmail.com</p>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </InView>
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      exit={{ y: 100 }}
                      variants={slideInVariants}
                      transition={{ duration: 2, type: "fade", stiffness: 50 }}
                    >
                      <div className="pb-3 pt-4 d-flex">
                        <img src={Filter} alt="image" width={80} height={30} />
                        <h4 className="h-100 fs-4 fw-bold">
                          Operational Hours
                        </h4>
                      </div>
                      <div className="d-flex py-2">
                        <p className="p-0 m-0 w-25">Monday</p>
                        <p className="p-0 m-0 ps-5">8am - 5pm</p>
                      </div>
                      <div className="d-flex py-2">
                        <p className="p-0 m-0 w-25">Tuesday</p>
                        <p className="p-0 m-0 ps-5">8am - 5pm</p>
                      </div>
                      <div className="d-flex py-2">
                        <p className="p-0 m-0 w-25">Wednesday</p>
                        <p className="p-0 m-0 ps-5">8am - 5pm</p>
                      </div>
                      <div className="d-flex py-2">
                        <p className="p-0 m-0 w-25">Thursday</p>
                        <p className="p-0 m-0 ps-5">8am - 5pm</p>
                      </div>
                      <div className="d-flex py-2">
                        <p className="p-0 m-0 w-25">Friday</p>
                        <p className="p-0 m-0 ps-5">8am - 5pm</p>
                      </div>
                      <div className="d-flex py-2">
                        <p className="p-0 m-0 w-25">Saturday</p>
                        <p className="p-0 m-0 ps-5">CLOSED</p>
                      </div>
                      <div className="d-flex pt-2 pb-5">
                        <p className="p-0 m-0 w-25">Sunday</p>
                        <p className="p-0 m-0 ps-5">CLOSED</p>
                      </div>
                    </motion.div>
                  )}
                </InView>
              </div>
              <div className="col-lg-6 col-xs-12">
                <div className="image">
                  <img src={Image} alt="image" className="image w-100 h-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
