// function component that will render the Projects page
import styles from "./Project.module.css";
import personalWeb from "../../resources/projectspage/websiteSC.png";
import corporateClimber from "../../resources/projectspage/CorporateClimberSC.png";
import rustMessaging from "../../resources/projectspage/rustSC.png";
import ProjectLink from "../ProjectLink";

// this component will render the body of the Projects page
// it contains image sneakpeeks to projects adn links to their github repos
function Projects() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>Projects</h2>
      </div>
      <div className={styles.projectContainer}>
        <ProjectLink link="https://github.com/Bortiz25/BrandonOrtiz.com" title="Personal Website" source={personalWeb} />
        <ProjectLink link="https://github.com/Bortiz25/CorporateClimber" title="Corporate Climber Game" source={corporateClimber} />
        <ProjectLink link="https://github.com/Bortiz25/Rust-Messaging-Project" title="Rust Messaging Project" source={rustMessaging} /> 
      </div>
    </div>
  );
}

export default Projects;
