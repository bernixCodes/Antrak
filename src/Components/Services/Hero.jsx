import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero"></div>
        <div className="hero-text">
          <div className="text-container">
            <h2>Our Services</h2>
            <div role="presentation">
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" className="fw-bold">
                  Home
                </Link>
                <Link underline="none" color="inherit" href="/services">
                  Services
                </Link>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
