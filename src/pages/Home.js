//functtion component that will render the home page and all the routers used in the nav bar
import Nav from "../components/Nav";
import Body from "../components/Body";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Nav />
      <Body />
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
