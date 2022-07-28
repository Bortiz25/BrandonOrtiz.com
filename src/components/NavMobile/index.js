import styles from "./NavMobile.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as BurgerBar } from "../../resources/navicons/burgerIcon.svg";

function NavMobile() {
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navLogo}>
          <h4>
            <Link to="/">Brandon Ortiz.</Link>
          </h4>
        </div>
        <BurgerBar className={styles.burger} />
      </nav>
    </>
  );
}

export default NavMobile;
