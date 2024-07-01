//Router Component will keep track of all routes on the site
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import Projects from "../pages/Projects.js";
import ContactMe from "../pages/ContactMe.js";

function RouterSystem() {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact-me" element={<ContactMe />} />
    </Routes>
  );
}

export default RouterSystem;
