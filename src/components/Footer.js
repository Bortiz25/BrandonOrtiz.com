// this function component will render the footer of the page with all the information necessary
import { ReactComponent as Instagram } from "../resources/instagram.svg";
import { ReactComponent as Linkedin } from "../resources/linkedin.svg";
import { ReactComponent as Twitter } from "../resources/twitter.svg";
import { ReactComponent as Github } from "../resources/github.svg";

function Footer() {
  return (
    <footer>
      <div className="rightFooter">
        <h4 className="footerLogo">Socials</h4>
        <div className="socialsLogo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ortiz._14/"
          >
            <Instagram />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/suspectbrando"
          >
            <Twitter />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/brandon-ortiz-776159187/"
          >
            <Linkedin />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Bortiz25"
          >
            <Github />
          </a>
        </div>
      </div>
      <div className="contactMe">
        <h4>Contact</h4>
        <h5>ortizbrandon140@gmail.com</h5>
      </div>
    </footer>
  );
}

export default Footer;
