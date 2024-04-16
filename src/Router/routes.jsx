import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import FAQ from "../Pages/Faq";
import Gallery from "../Pages/Gallery";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
