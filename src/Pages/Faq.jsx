import Header from "../Components/Header";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Filter from "../assets/icons/filter.svg";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const slideInVariants = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };
  return (
    <>
      <Header />

      <Navbar />

      <div className="hero-container">
        <div className="hero"></div>
        <div className="hero-text">
          <div className="text-container">
            <h2>FAQs</h2>
            <div role="presentation">
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" className="fw-bold">
                  Home
                </Link>
                <Link underline="none" color="inherit" href="/faq">
                  FAQ
                </Link>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>

      <section className="faq">
        <div className="wrapper container">
          <div className="py-5">
            <div className="pb-2 d-flex justify-content-center">
              <img src={Filter} alt="image" width={80} height={30} />
              <h4 className="h-100 fs-4 fw-bold">Frequently Asked Questions</h4>
            </div>
            <p className="text-center fs-5 pb-4">
              Below is a concise compilation of our most commonly asked
              questions.
            </p>
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
                  <div className="py-3 px-3 w-100 border fw-bold">General</div>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography sx={{ width: "100%", flexShrink: 0 }}>
                        What services does Antrak Exports LLC offer?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        We offer a comprehensive suite of international shipping
                        services, including freight forwarding, customs
                        clearance, documentation management, packing and
                        insurance, and global logistics solutions. We can handle
                        car parts, merchandise, vehicles, and even entire
                        container loads.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography sx={{ width: "100%", flexShrink: 0 }}>
                        Can you ship to my destination country?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        We have a vast global network and can ship to almost any
                        destination in the world. Contact us for details on
                        specific countries.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
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
                  <div className="py-3 px-3 w-100 border fw-bold">Services</div>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography sx={{ width: "100%", flexShrink: 0 }}>
                        Do you offer insurance for my shipment?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, we offer optional cargo insurance to protect your
                        shipment against loss or damage during transit.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      <Typography sx={{ width: "100%", flexShrink: 0 }}>
                        What packing materials do you use?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        We use high-quality packing materials specifically
                        designed to protect your cargo during transit. We can
                        tailor the packing solution to the specific needs of
                        your shipment.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5bh-content"
                      id="panel6bh-header"
                    >
                      <Typography sx={{ width: "100%", flexShrink: 0 }}>
                        Do you offer any discounts?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        We offer competitive rates and may be able to provide
                        discounts for high-volume shipments or by utilizing
                        consolidation services.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
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
                  <div className="py-3 px-3 w-100 border fw-bold">Delivery</div>
                  <Accordion
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel6bh-content"
                      id="panel6bh-header"
                    >
                      <Typography sx={{ width: "100%", flexShrink: 0 }}>
                        What are my delivery options?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        We offer a variety of delivery options depending on your
                        needs and budget. This may include port-to-port,
                        door-to-door, or other options.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel7bh-content"
                      id="panel7bh-header"
                    >
                      <Typography sx={{ width: "100%", flexShrink: 0 }}>
                        How long will it take for my shipment to arrive?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        The transit time for your shipment will depend on the
                        origin, destination, and chosen shipping method. We will
                        provide you with an estimated delivery timeframe during
                        the quoting process.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
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
                  <div className="py-3 px-3 w-100 border fw-bold">
                    Contact Us
                  </div>
                  <Accordion
                    expanded={expanded === "panel8"}
                    onChange={handleChange("panel8")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel8bh-content"
                      id="panel8bh-header"
                    >
                      <Typography sx={{ width: "100%", flexShrink: 0 }}>
                        How can I contact you?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        You can contact us by filling out our online contact
                        form, calling us at{" "}
                        <Link href="tel:(941) -276-8532">
                          <p className="">(941) -276-8532</p>
                        </Link>
                        or emailing us at{" "}
                        <Link href="mailto:antrakexport@gmail.com">
                          <p className="">antrakexport@gmail.com</p>
                        </Link>
                        Our friendly team is always happy to help!
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              )}
            </InView>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Faq;
