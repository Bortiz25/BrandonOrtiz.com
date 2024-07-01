// building the framework for the contact page
import NavDesktop from "../components/NavDesktop";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

// TODO: add contact form for page
// create contact form
// connect this page with router
const Contact = () => {
  return (
    <>
      <NavMobile />
      <NavDesktop />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
