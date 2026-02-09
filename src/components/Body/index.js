import React, { useState, useEffect, useCallback } from "react";
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
          <h2 className={styles.descriptionTitle}>Introduction</h2>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              Hello, nice to meet you. My name is Brandon, I’m a software engineer pursuing their passion in building software and becoming the best version of themselves. I came to this career path because of my passion for building, and instead of going down the route of engineering the structure of buildings in the material world I decided to focus on building software (It’s also way easier on the back and knees once you get a little older). I think I’m an extrovert although some days it’s hard to muster up social interactions. I really enjoy making people feel like they belong, building community is something I believe I’m very good at. I have a very strong work ethic, which is just stubbornness since I refuse to let any problem get the better of me, and a passion for working with talented and curious people.
            </p>
            <p className={styles.description}>
              When it comes to my own growth I have a strong desire to understand everything that is put in front of me and I’m unsatisfied with completing any task without asking why and to what end first. I’ve been programming for about 4 years now and know my way around a handful of technologies and frameworks. The skill I’m most proud of is my ability to absorb information and push through difficult problems until they click because they always click eventually. If you’ve made it this far you’ve made it through this odd little introduction of myself and I commend you for that. If you keep scrolling or explore the rest of this site you’ll find more of my technical experience, skills and work. See yah! :) 
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Body;
