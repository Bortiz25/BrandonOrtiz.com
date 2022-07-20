// function component that will render the body of the site
import React, { useState, useEffect, useCallback } from "react";
import headshot from "../../resources/headshot.jpg";
import styles from "./Body.module.css";

function Body() {
  const [index, setIndex] = useState(0);
  const [intro, setIntro] = useState("");
  const word = "Brandon Ortiz.";

  const updateName = useCallback(() => {
    if (index < word.length) {
      setIntro(intro + word[index]);
      setIndex(index + 1);
    }
  }, [index, intro]);

  useEffect(() => {
    setTimeout(updateName, 250);
  }, [updateName]);

  return (
    <main>
      <div className={styles.homeScreen}>
        <header>
          <h2 id="home" className={styles.intro}>
            {intro}
          </h2>
        </header>
      </div>
      <div className={styles.aboutMeBackground} id="aboutMePage">
        <div id={styles["aboutMe"]}>
          <img
            className={styles.headshot}
            src={headshot}
            alt="Sorry this image is unavailable"
          />
          <h3 className={styles.description}>
            Hello, my name is Brandon Ortiz and I was born and raised in
            Houston, Texas. I am currently a sophomore attending Trinity
            University in San Antonio, Texas, where I am pursuing my B.S. in
            Computer Science. I am an aspiring software and web developer with
            interest in web3 and blockchain development. I am working as a
            Junior Developer at Varsity Hype, a sports tech company based out of
            Houston, Texas. I have a passion for sports, soccer in specific, and
            for learning new things. I am always open to growth as a person and
            as a developer.
          </h3>
        </div>
      </div>
    </main>
  );
}

export default Body;
