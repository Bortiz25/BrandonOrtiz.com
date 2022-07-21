// function component that will render skills and experience section of page
import styles from "./Experience.module.css";
import scala from "../../resources/languages/scalaLogo.png";
import html from "../../resources/languages/htmlLogo.png";
import css from "../../resources/languages/cssLogo.png";
import javascript from "../../resources/languages/javascriptLogo.png";
import react from "../../resources/languages/reactLogo.png";

function Experience() {
  return (
    <>
      <h4 className={styles.skillsHeader}>Skills</h4>
      <div className={styles.skills}>
        <img className={styles.langLogos} alt="Scala" src={scala} />
        <img className={styles.langLogos} alt="HTML" src={html} />
        <img className={styles.langLogos} alt="CSS" src={css} />
        <img className={styles.langLogos} alt="JavaScript" src={javascript} />
        <img className={styles.langLogos} alt="React" src={react} />
      </div>
    </>
  );
}

export default Experience;
