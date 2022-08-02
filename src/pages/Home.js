//functtion component that will render the home page and all the routers used in the nav bar
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import Body from "../components/Body";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavMobile />
      <NavDesktop />
      <Body />
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
