// function component that will render the Projects page
import styles from "./Project.module.css";
import personalWeb from "../../resources/projectspage/websiteSC.png";
import { ReactComponent as Github } from "../../resources/projectspage/projectGithub.svg";

function Projects() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>Projects</h2>
      </div>

      <div className={styles.websiteSection}>
        <div className={styles.webContainer}>
          <a
            href="https://github.com/Bortiz25/BrandonOrtiz.com"
            target="_blank"
          >
            <div className={styles.webLayer}>
              <Github className={styles.github} />
            </div>
          </a>
          <img
            className={styles.websiteImg}
            src={personalWeb}
            alt="personal website not loading . . ."
          />
        </div>
        <h3 className={styles.webDescription}>Personal Website</h3>
      </div>
    </div>
  );
}

export default Projects;
