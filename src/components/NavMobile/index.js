import styles from "./NavMobile.module.css";
import menu from "./BurgerNav.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as BurgerBar } from "../../resources/navicons/burgerMenu.svg";
import { ReactComponent as Exit } from "../../resources/navicons/exitIcon.svg";
import { useState } from "react";

function NavMobile() {
  const [didToggle, setDidToggle] = useState(false);
  const menuToggle = () => {
    if (!didToggle) {
      setDidToggle(true);
    } else {
      setDidToggle(false);
    }
  };

  return (
    <div id={styles["main"]}>
      <nav className={styles.navBar}>
        <div className={styles.navLogo}>
          <h4>
            <Link to="/">Brandon Ortiz.</Link>
          </h4>
        </div>
        <BurgerBar className={styles.burger} onClick={menuToggle} />
      </nav>
      <div className={didToggle ? menu.visible : menu.hidden}>
        <div className={menu.exitSection}>
          <Exit className={menu.exit} onClick={menuToggle} />
        </div>
        <h4 className={menu.link}>
          <Link to="/projects" onClick={menuToggle} className={menu.link}>
            Projects
          </Link>
        </h4>
        <br />
        <h4 className={menu.link}>
          <a href="#aboutMePage" onClick={menuToggle} className={menu.link}>
            About
          </a>
        </h4>
      </div>
    </div>
  );
}

export default NavMobile;
