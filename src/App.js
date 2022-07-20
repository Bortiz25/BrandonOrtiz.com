// Function Component that will render the whole website
import Nav from "./components/Nav";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Nav />
      <Body />
      <Footer />
    </>
  );
}

export default App;
