import styles from "./BurgerBar.module.css";
import { ReactComponent as Exit } from "../../resources/navicons/exitIcon.svg";

function BurgerNav() {
  return (
    <div>
      <div>
        <Exit />
      </div>
      <h4>Projects</h4>
      <br />
      <h4>About</h4>
    </div>
  );
}

export default BurgerNav;
