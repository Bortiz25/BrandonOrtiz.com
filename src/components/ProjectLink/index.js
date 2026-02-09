import styles from "./ProjectLink.module.css"; 
import { ReactComponent as Github } from "../../resources/projectspage/projectGithub.svg";

function ProjectLink({link, title, source}) {
    return (
        <div className={styles.websiteSection}>
          <div className={styles.webContainer}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.webLayer}>
                <Github className={styles.github} />
              </div>
            </a>
            <img
              className={styles.websiteImg}
              src={source}
              alt="personal website not loading . . ."
            />
          </div>
          <h3 className={styles.webDescription}>{title}</h3>
        </div>
    )
}

export default ProjectLink;