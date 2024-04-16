import Bio from "../assets/images/footer/footer-bio.jpg";
import ImageOne from "../assets/images/footer/01.webp";
import ImageTwo from "../assets/images/footer/02.webp";
import ImageThree from "../assets/images/footer/03.webp";
import ImageFour from "../assets/images/footer/04.webp";
import ImageFive from "../assets/images/footer/05.webp";
import ImageSix from "../assets/images/footer/06.webp";
import ImageSeven from "../assets/images/footer/07.webp";
import ImageEight from "../assets/images/footer/08.webp";
import ImageNine from "../assets/images/footer/09.webp";
import { Link } from "react-router-dom";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter-x.svg";
import { NavLink } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container wrapper text-white">
          <div className="py-5">
            <div className="row h-100">
              <div className="col-xl-4 pb-4">
                <h3 className="flex-wrap text-break d-flex align-items-center">
                  Antrak Exports LLC
                </h3>
                <p>
                  At Antrak Export LLC, we are passionate about connecting you
                  to the world. We are a full-service export company dedicated
                  to simplifying international shipping for businesses and
                  individuals alike.
                </p>
                <div className="d-flex pb-3">
                  <div>
                    <img src={Bio} alt="Manager" />
                  </div>
                  <div className="mx-2">
                    <p className="py-0 my-0">Salia Mohammed</p>
                    <p className="py-0 my-0">Manager</p>
                  </div>
                </div>
                <div className="h-100 w-100 social-container">
                  <p className="py-0 my-0 font-italic">Follow us on</p>
                  <Link to="/">
                    <img src={Facebook} alt="facebook" className="social" />
                  </Link>
                  <Link to="/">
                    <img src={Instagram} alt="instagram" className="social" />
                  </Link>
                  <Link to="/">
                    <img src={Twitter} alt="twitter" className="social" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 d-flex flex-column">
                <div className="row">
                  <div className="col-md-4 col-lg-4">
                    <div>
                      <h5 className="text-decoration-underline text-white p-0 m-0">
                        Quick Links
                      </h5>
                    </div>
                    <div>
                      <NavLink
                        href="/"
                        className="text-decoration-none text-white"
                      >
                        Home
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        href="/about"
                        className="text-decoration-none text-white"
                      >
                        About
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        href="/services"
                        className="text-decoration-none text-white"
                      >
                        Services
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        href="/contact"
                        className="text-decoration-none text-white"
                      >
                        Contact
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        href="/gallery"
                        className="text-decoration-none text-white"
                      >
                        Gallery
                      </NavLink>
                    </div>
                    <div>
                      <NavLink
                        href="/faq"
                        className="text-decoration-none text-white"
                      >
                        FAQs
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-8">
                    <h5 className="text-decoration-underline text-white">
                      Working Hours
                    </h5>
                    <p className="links">
                      We are only open for business on weekdays
                    </p>
                    <div className="d-flex w-100">
                      <p>Mon - Fri:</p>
                      <p className="mx-4">8am - 5pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="row">
                  <div className="col-4 col-md-3 col-xl-4 mb-3">
                    <img src={ImageOne} alt="image" className=" w-100 h-100" />
                  </div>
                  <div className="col-4 col-md-3 col-xl-4 mb-3">
                    <img src={ImageTwo} alt="image" className=" w-100 h-100" />
                  </div>
                  <div className="col-4 col-md-3 col-xl-4 mb-3">
                    <img
                      src={ImageThree}
                      alt="image"
                      className=" w-100 h-100"
                    />
                  </div>
                  <div className="col-4 col-md-3 col-xl-4 mb-3">
                    <img src={ImageFour} alt="image" className=" w-100 h-100" />
                  </div>
                  <div className="col-4 col-md-3 col-xl-4 mb-3">
                    <img src={ImageFive} alt="image" className=" w-100 h-100" />
                  </div>
                  <div className="col-4 col-md-3 col-xl-4 mb-3">
                    <img src={ImageSix} alt="image" className=" w-100 h-100" />
                  </div>
                  <div className="col-4 col-md-3 col-xl-4 mb-3">
                    <img
                      src={ImageSeven}
                      alt="image"
                      className=" w-100 h-100"
                    />
                  </div>
                  <div className="col-4 col-md-3 col-xl-4 mb-3">
                    <img
                      src={ImageEight}
                      alt="image"
                      className=" w-100 h-100"
                    />
                  </div>
                  <div className="col-4 col-md-3 col-xl-4 mb-3">
                    <img src={ImageNine} alt="image" className=" w-100 h-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
