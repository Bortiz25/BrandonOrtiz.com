// function component that will render the projects page
import Project from "../components/Project";
import NavDesktop from "../components/NavDesktop";
import Footer from "../components/Footer";

function Projects() {
  return (
    <>
      <NavDesktop />
      <Project />
      <Footer />
    </>
  );
}

export default Projects;
