// function component that will render the nav bar on the site
import styles from "./NavDesktop.module.css";
import { Link } from "react-router-dom";

function Nav() {
  // this return method will render all that is needed for the nav bar
  return (
    <nav className={styles.navBar}>
      <div className={styles.navLogo}>
        <h4>
          <Link to="/">Brandon Ortiz.</Link>
        </h4>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/projects" className={styles.navTags}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact-me" className={styles.navTags}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
