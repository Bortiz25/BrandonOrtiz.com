// this function component will render the footer of the page with all the information necessary
import { ReactComponent as Instagram } from "../../resources/instagram.svg";
import { ReactComponent as Linkedin } from "../../resources/linkedin.svg";
import { ReactComponent as Twitter } from "../../resources/twitter.svg";
import { ReactComponent as Github } from "../../resources/github.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.rightFooter}>
        <h4 className={styles.footerLogo}>Socials</h4>
        <div className={styles.socialsLogo}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ortiz._14/"
          >
            <Instagram className={styles.socialLinks} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/suspectbrando"
          >
            <Twitter className={styles.socialLinks} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/brandon-ortiz-776159187/"
          >
            <Linkedin className={styles.socialLinks} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Bortiz25"
          >
            <Github className={styles.socialLinks} />
          </a>
        </div>
      </div>
      <div className={styles.contactMe}>
        <h4 className={styles.contactMeHeader}>Contact</h4>
        <h5 className={styles.contactMeBody}>ortizbrandon140@gmail.com</h5>
      </div>
    </footer>
  );
}

export default Footer;
