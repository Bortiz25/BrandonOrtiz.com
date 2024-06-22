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

  /* TODO: change format of bio to a resume style format
     with different categories that are filled and and fun
     less professionality would reflect the personality of the 
     individual myself  */
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
          <h2 className={styles.descriptionTitle}>BIO.</h2>
          <div className={styles.photoDiv}>
            <img
              className={styles.headshot}
              alt="Sorry this image is unavailable"
            />
            <p className={styles.description}>
              I am a senior at Trinity University in San Antonio, Texas,
              dedicated to improving myself in all fascets of life. A software
              developer with aspirations to learn web3 developmenet and a
              fascination with bitcoin and the revolutionary technology that is
              the blockcahin. I'm currently a software development intern at
              Foreflight, an aviation technology company. I am passionate about
              sports , soccer mostly, I love to bomb hills on my skateboard and
              I'm constantly open to growth through life experience. There is no
              greater teacher than life itself.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Body;
