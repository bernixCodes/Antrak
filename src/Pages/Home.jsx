import Header from "../Components/Header";
import Navbar from "../Components/Nav";
import Carousel from "../Components/Home/Carousel";
import About from "../Components/Home/About";
import Services from "../Components/Home/Services";
import Sector from "../Components/Home/Sector";
import Counter from "../Components/Home/Counter";
import Testimonials from "../Components/Home/Testimonials";
import Footer from "../Components/Footer";
import images from "../Data/images.json";
import data from "../Data/testimonials.json";

const Home = () => {
  const slides = images.slides;
  const testimonials = data.testimonials;

  return (
    <>
      <Header />

      <Navbar />

      <Carousel slides={slides} />

      <About />

      <Services />

      <Sector />

      <Testimonials testimonials={testimonials} />

      <Counter />

      <Footer />
    </>
  );
};

export default Home;
