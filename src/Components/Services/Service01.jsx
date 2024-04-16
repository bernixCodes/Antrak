import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Filter from "../../assets/icons/filter.svg";
// import Service from "../../assets/images/service02.jpg";
import Cargo1 from "../../assets/images/services/service01.webp";
import Cargo2 from "../../assets/images/services/service03.webp";
import Cargo3 from "../../assets/images/services/vehicle-shipping.jpg";
import Cargo4 from "../../assets/images/services/car-parts.jpg";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Service01 = () => {
  const [selectedItem, setSelectedItem] = useState("#global-shipping");

  const handleItemClick = (eventKey) => {
    setSelectedItem(eventKey);
  };

  useEffect(() => {
    const clearHashFromURL = () => {
      if (window.location.hash) {
        history.replaceState(null, null, " ");
      }
    };

    clearHashFromURL();

    return () => {
      clearHashFromURL();
    };
  }, []);

  const slideInVariants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };

  return (
    <>
      <section className="bg-white services">
        <div className="wrapper container">
          <div className="py-5">
            <div className="row p-0 m-0">
              <div className="col-lg-8 col-xs-12">
                {selectedItem === "#global-shipping" && (
                  <>
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
                          <div className="pb-3 d-flex">
                            <img
                              src={Filter}
                              alt="image"
                              width={80}
                              height={30}
                            />
                            <h4 className="h-100 fs-4 fw-bold">
                              Global Shipping
                            </h4>
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
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <p className="text-justify">
                            Antrak Exports LLC is your trusted partner for
                            navigating the complexities of international
                            shipping. We offer a comprehensive suite of services
                            designed to streamline the process of sending cargo
                            anywhere in the world, regardless of size or
                            complexity. Our team of experts caters to businesses
                            and individuals alike, ensuring a smooth and
                            successful journey for your shipment.
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
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <div className="row p-0 m-0 pt-4">
                            <div className="col-lg-6 col-xs-12 pb-4">
                              <img
                                src={Cargo2}
                                alt="image"
                                className="w-100 h-100"
                              />
                            </div>
                            <div className="col-lg-6 col-xs-12">
                              <h5 className="overview">Services Offered</h5>
                              <p>
                                Our global shipping service goes beyond just
                                moving your goods. We offer a complete suite of
                                services to streamline the entire process,
                                including:
                              </p>
                              <ul>
                                <li>Freight forwarding</li>
                                <li>Customs clearance</li>
                                <li>Documentation management</li>
                                <li>Packing and insurance</li>
                                <li>Specialized Cargo Handling</li>
                              </ul>
                            </div>
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
                          exit={{ x: 200 }}
                          variants={slideInVariants}
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <h5 className="pt-4">Our Strengths and Advantages</h5>
                          <ul>
                            <li>
                              <strong>
                                Global Network and Competitive Rates:{" "}
                              </strong>
                              We leverage our established partnerships with
                              reliable carriers and agents worldwide to offer
                              competitive rates and efficient delivery to any
                              destination. We prioritize transparency with clear
                              pricing and explore cost-saving options like
                              consolidation.
                            </li>
                            <li>
                              <strong>Focus on Sustainability: </strong>
                              At Antrak Exports LLC, we understand the
                              importance of eco-friendly practices. We explore
                              sustainable packaging options and work with
                              partners who prioritize responsible shipping
                              methods.
                            </li>
                            <li>
                              <strong>
                                Personalized Service and Clear Communication:{" "}
                              </strong>
                              We take the time to understand your specific needs
                              and develop a customized shipping plan that fits
                              your budget and timeline. Clear communication is
                              key, so we will keep you informed throughout the
                              entire process.
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </InView>
                  </>
                )}

                {selectedItem === "#vehicle-shipping" && (
                  <>
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
                          <div className="pb-3 d-flex">
                            <img
                              src={Filter}
                              alt="image"
                              width={80}
                              height={30}
                            />
                            <h4 className="h-100 fs-4 fw-bold">
                              Vehicle Shipping
                            </h4>
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
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <p className="text-justify">
                            Moving a car across borders can be a daunting task,
                            but Antrak Exports LLC is here to simplify the
                            process. Our specialized vehicle shipping service
                            ensures your car arrives at its international
                            destination safely and efficiently. Whether you are
                            relocating overseas, selling a car to an
                            international buyer, or simply need to transport a
                            vehicle for any reason, we can handle it all.
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
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <div className="row p-0 m-0 pt-4">
                            <div className="col-lg-6 col-xs-12 pb-4">
                              <img
                                src={Cargo3}
                                alt="image"
                                className="w-100 h-100"
                              />
                            </div>
                            <div className="col-lg-6 col-xs-12">
                              <h5 className="overview">Services Offered</h5>
                              <p>
                                Don&#39;t just ship your car overseas, relocate
                                it with confidence! Our vehicle shipping service
                                provides a complete package to handle every
                                aspect of the international journey, including:
                              </p>
                              <ul>
                                <li>Customs clearance</li>
                                <li>Pre-Shipment Preparation Guidance</li>
                                <li>Secure Transportation</li>
                                <li>Route Planning and Cost Estimation</li>
                              </ul>
                            </div>
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
                          exit={{ x: 200 }}
                          variants={slideInVariants}
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <h5 className="pt-4">Our Strengths and Advantages</h5>
                          <ul>
                            <li>
                              <strong>
                                Experienced Vehicle Shipping Specialists:{" "}
                              </strong>
                              Our team possesses extensive knowledge of
                              international vehicle shipping regulations,
                              customs clearance procedures, and safe
                              transportation methods.
                            </li>
                            <li>
                              <strong>
                                Global Network and Diverse Routing Options:{" "}
                              </strong>
                              We have established partnerships with shipping
                              companies worldwide, offering a variety of routes
                              and departure schedules to fit your timeline and
                              budget.
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </InView>
                  </>
                )}

                {selectedItem === "#car-parts-shipping" && (
                  <>
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
                          <div className="pb-3 d-flex">
                            <img
                              src={Filter}
                              alt="image"
                              width={80}
                              height={30}
                            />
                            <h4 className="h-100 fs-4 fw-bold">
                              Car Parts Shipping
                            </h4>
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
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <p className="text-justify">
                            At Antrak Exports LLC, we understand the importance
                            of getting your car parts where they need to be,
                            quickly and securely. That is why we offer a
                            specialized car parts shipping service designed to
                            meet the unique needs of this industry. Whether you
                            are a mechanic sending a single engine block or a
                            dealership transporting a container full of parts,
                            we can handle it all.
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
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <div className="row p-0 m-0 pt-4">
                            <div className="col-lg-6 col-xs-12 pb-4">
                              <img
                                src={Cargo4}
                                alt="image"
                                className="w-100 h-100"
                              />
                            </div>
                            <div className="col-lg-6 col-xs-12">
                              <h5 className="overview">Services Offered</h5>
                              <p>
                                Our car parts shipping service goes beyond just
                                getting your parts there. We ensure they arrive
                                ready to roll with a complete suite of services,
                                including:
                              </p>
                              <ul>
                                <li>Customs clearance</li>
                                <li>Packing and Crating</li>
                                <li>Multimodal Transportation</li>
                                <li>Safe and Secure Packaging</li>
                              </ul>
                            </div>
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
                          exit={{ x: 200 }}
                          variants={slideInVariants}
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <h5 className="pt-4">Our Strengths and Advantages</h5>
                          <ul>
                            <li>
                              <strong>
                                Expertise in Car Part Regulations:{""}
                              </strong>
                              Our team has a deep understanding of the specific
                              regulations and documentation requirements for
                              shipping car parts internationally. We handle the
                              complexities, ensuring your parts clear customs
                              smoothly and avoid unnecessary delays.
                            </li>
                            <li>
                              <strong>Cost-Effective Solutions:{""}</strong>
                              We understand that cost is a major factor when
                              shipping car parts. We work with reliable carriers
                              to secure competitive rates and explore options
                              like consolidation to save you money.
                            </li>
                            <li>
                              <strong>Streamlined Process:{""}</strong>
                              Our dedicated team will handle all aspects of your
                              car part shipment, from pick-up at your origin to
                              delivery at the destination. We keep you informed
                              throughout the process with clear communication
                              and status updates.
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </InView>
                  </>
                )}

                {selectedItem === "#merchandise-shipping" && (
                  <>
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
                          <div className="pb-3 d-flex">
                            <img
                              src={Filter}
                              alt="image"
                              width={80}
                              height={30}
                            />
                            <h4 className="h-100 fs-4 fw-bold">
                              Merchandise Shipping
                            </h4>
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
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <p className="text-justify">
                            At Antrak Exports LLC, we understand the importance
                            of getting your merchandise to your international
                            customers quickly, securely, and cost-effectively.
                            Our merchandise shipping service is designed to
                            cater to businesses of all sizes, from established
                            brands to e-commerce entrepreneurs. Whether you are
                            shipping a single box of handcrafted jewelry or a
                            container full of clothing, we can handle it all.
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
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <div className="row p-0 m-0 pt-4">
                            <div className="col-lg-6 col-xs-12 pb-4">
                              <img
                                src={Cargo1}
                                alt="image"
                                className="w-100 h-100"
                              />
                            </div>
                            <div className="col-lg-6 col-xs-12">
                              <h5 className="overview">Services Offered</h5>
                              <p>
                                Our merchandise shipping doesn&#39;t stop at
                                getting your products out the door. We offer a
                                complete suite of services to streamline your
                                entire fulfillment process, including:
                              </p>
                              <ul>
                                <li>Freight forwarding</li>
                                <li>Customs clearance</li>
                                <li>Packing and Warehousing</li>
                              </ul>
                            </div>
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
                          exit={{ x: 200 }}
                          variants={slideInVariants}
                          transition={{
                            duration: 2,
                            type: "fade",
                            stiffness: 50,
                          }}
                        >
                          <h5 className="pt-4">Our Strengths and Advantages</h5>
                          <ul>
                            <li>
                              <strong>
                                Competitive Rates and Cost Transparency:{""}
                              </strong>
                              We work with a network of reliable carriers to
                              secure competitive rates for your merchandise
                              shipments. We prioritize transparency, providing
                              clear and upfront pricing with no hidden fees.
                            </li>
                            <li>
                              <strong>
                                Scalable Solutions for All Needs: {""}
                              </strong>
                              We offer a variety of shipping options to suit
                              your specific needs and merchandise volume. This
                              includes options for small packages, pallets, and
                              full container loads.
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </InView>
                  </>
                )}
              </div>
              <div className="col-lg-4 col-xs-12 other-services">
                <h5>Other Services</h5>
                <ListGroup
                  defaultActiveKey="#global-shipping"
                  onSelect={handleItemClick}
                >
                  <ListGroup.Item action href="#global-shipping">
                    Global Shipping
                  </ListGroup.Item>
                  <ListGroup.Item action href="#vehicle-shipping">
                    Vehicle Shipping
                  </ListGroup.Item>
                  <ListGroup.Item action href="#car-parts-shipping">
                    Car Parts Shipping
                  </ListGroup.Item>
                  <ListGroup.Item action href="#merchandise-shipping">
                    Merchandise Shipping
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service01;
