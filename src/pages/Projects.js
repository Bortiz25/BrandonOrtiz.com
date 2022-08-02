// function component that will render the projects page
import Project from "../components/Project";
import NavDesktop from "../components/NavDesktop";
import Footer from "../components/Footer";
import NavMobile from "../components/NavMobile";

function Projects() {
  return (
    <>
      <NavMobile />
      <NavDesktop />
      <Project />
      <Footer />
    </>
  );
}

export default Projects;
