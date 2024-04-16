import ImageOne from "../../assets/images/watermark/about-loaction.png";
import ImageTwo from "../../assets/images/watermark/about-image-2.png";
import MainImage from "../../assets/images/others/about-image.png";
import Filter from "../../assets/icons/filter.svg";
import { NavLink } from "react-bootstrap";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const slideInVariants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };
  return (
    <>
      <section>
        <div className="container wrapper">
          <div className="py-5">
            <div className="water-mark">
              <img src={ImageOne} alt="image" />
              <img src={ImageTwo} alt="image" />
            </div>

            <div className="row m-0 p-0 about w-100 h-100">
              <div className="col-xl-6 col-md-8 col-sm-12">
                <InView threshold={0.3} triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={fadeInVariants}
                    >
                      <img
                        src={MainImage}
                        alt="image"
                        className="d-flex mx-auto pb-5 w-100 h-auto"
                      />
                    </motion.div>
                  )}
                </InView>
              </div>

              <div className="col-xl-6 col-md-12 col-sm-12 about-text">
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
                      <div className="pb-3 d-flex justify-content-center">
                        <img src={Filter} alt="image" width={80} height={30} />
                        <h4 className="h-100 fs-4 fw-bold">About Us</h4>
                      </div>
                      <p className="pb-3 text-center w-100">
                        Antrak Export LLC serves as your comprehensive solution
                        for all international shipping requirements. We offer a
                        variety of services to businesses and individuals alike,
                        from efficiently shipping any size cargo around the
                        world to expertly handling the complexities of vehicles
                        and car part exports and ensuring safe and
                        cost-effective delivery of merchandise. We understand
                        the challenges of international shipping and provide
                        personalized service, expert guidance, and a commitment
                        to excellence to make the process as smooth as possible.
                        Our core values ensure efficiency, reliability, and
                        competitive rates, while transparency and integrity
                        build trust with every client. By choosing Antrak Export
                        LLC, you can trust your shipment will reach its global
                        destination securely and on-time.
                      </p>
                      <NavLink href="/about" className="text-decoration-none">
                        <button type="button" className="about-submit" href="/">
                          Read more
                        </button>
                      </NavLink>
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

export default About;
