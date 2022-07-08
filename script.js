// javascript file for personal website

/*code for the typewriting effect on the home page of my personal website */

/* these variables hold the string that will be printed to the website and the speed at whcih it will be printed */
const intro = "Brandon Ortiz.";
const speed = 250;

/* if statement that will check if a variable (that is keeping track of whether all letters are printed) equals the string intro and if it does not it will print the next character */

let allLetters = 0;
const typeEffect = () => {
  if (allLetters < intro.length) {
    document.getElementById("home").innerHTML += intro[allLetters];
    allLetters++;
    setTimeout(typeEffect, speed);
  }
};

typeEffect();
