import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter-x.svg";
import Location from "../assets/icons/location.svg";
import Email from "../assets/icons/email.svg";
import Call from "../assets/icons/phone.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="justify-content-between">
        <div className="d-flex shape-wrapper">
          <div className="trapezium text-white">
            <h3 className="flex-wrap h-100 w-50 text-break mx-5 d-flex align-items-center">
              Antrak Exports LLC
            </h3>
          </div>
          <div className="line h-100 w-100"></div>
        </div>

        <div className="details d-flex align-items-center justify-content-evenly">
          <Link
            to="/"
            className="w-25 d-flex justify-content-center align-items-center text-decoration-none"
          >
            <img src={Location} alt="location" className="icons" />
            <p className="my-auto">4018 E 12th Avenue Tampa, FL, 33605</p>
          </Link>
          <Link
            to="mailto:antrakexport@gmail.com"
            className="w-25 d-flex justify-content-center align-items-center text-decoration-none"
          >
            <img src={Email} alt="email" className="icons" />
            <p className="my-auto">antrakexport@gmail.com</p>
          </Link>
          <Link
            to="tel:(941) -276-8532"
            className="w-15 d-flex justify-content-end align-items-center text-decoration-none"
          >
            <img src={Call} alt="call" className="icons" />
            <p className="my-auto">(941) -276-8532</p>
          </Link>
        </div>

        <div className="d-flex shape-wrapper-rotate h-100">
          <div className="trapezium text-white">
            <div className="h-100 w-50 text-break mx-5 d-flex align-items-center">
              <Link to="/">
              <img src={Instagram} alt="instagram" className="icon" />
              </Link>
              <Link to="/">
              <img src={Twitter} alt="twitter" className="icon" />
              </Link>
              <Link to="/">
              <img src={Facebook} alt="facebook" className="icon" />
              </Link>
             
             
          
            </div>
          </div>
          <div className="line h-100 w-100"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
