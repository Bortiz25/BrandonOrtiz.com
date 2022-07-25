// function component that will render the Projects page
import styles from "./Project.module.css";
import inProgress from "../../resources/inProgress.gif";

function Projects() {
  return (
    <div className={styles.main}>
      <img
        src={inProgress}
        alt="can't load . . ."
        className={styles.progress}
      />
      <h1 className={styles.message}>Page coming soon!👷</h1>
    </div>
  );
}

export default Projects;
