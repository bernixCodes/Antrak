import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { AnimatePresence } from "framer-motion";

import Routes from "./Router/routes";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <AnimatePresence wait>
        <>
          <Routes />
          <Outlet />
        </>
      </AnimatePresence>
    </>
  );
}

export default App;
