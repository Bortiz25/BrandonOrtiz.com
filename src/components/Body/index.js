import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "./Body.module.css";

// component renders the body of the home page including title page and the brief personal description
function Body() {
  const [index, setIndex] = useState(0);
  const [intro, setIntro] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);
  const word = "Brandon Ortiz.";

  //function and useEffect that create the typing effect for the opening page
  const updateName = useCallback(() => {
    if (index < word.length) {
      setIntro(intro + word[index]);
      setIndex(index + 1);
    }
  }, [index, intro]);

  useEffect(() => {
    setTimeout(updateName, 250);
  }, [updateName]);

  // function updates the scroll state in order to end page bouncing animation
  const updateScroll = () => {
    setHasScrolled(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <main>
      <div className={hasScrolled ? styles.homeScreen : styles.homeScreenAnim}>
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
