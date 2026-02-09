// function component that will render skills and experience section of page
import styles from "./Experience.module.css";
import scala from "../../resources/languages/scalaLogo.png";
import react from "../../resources/languages/reactLogo.png";
import java from "../../resources/languages/javaLogo.png";
import cpp from "../../resources/languages/cppLogo.png";
import rust from "../../resources/languages/rustLogo.png";

function Experience() {
  return (
    <>
      <h4 className={styles.skillsHeader}>Skills.</h4>
      <div className={styles.skills}>
        <img className={styles.langLogos} alt="Scala" src={scala} />
        <img className={styles.langLogos} alt="React" src={react} />
        <img className={styles.langLogos} alt="Java" src={java} />
        <img className={styles.langLogos} alt="CPP" src={cpp} />
        <img className={styles.langLogos} alt="Rust" src={rust} />
      </div>
    </>
  );
}

export default Experience;
