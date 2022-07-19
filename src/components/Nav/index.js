// function component that will render the nav bar on the site
import styles from "./Nav.module.css";

function Nav() {
  // this return method will render all that is needed for the nav bar
  return (
    <nav className={styles.navBar}>
      <div className={styles.navLogo}>
        <h4>
          <a href="#home">Brandon Ortiz.</a>
        </h4>
      </div>
      <ul>
        <li className={styles.navTags}>
          <a href="#aboutMePage">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
