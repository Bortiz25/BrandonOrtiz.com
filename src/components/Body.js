// function component that will render the body of the site
import headshot from "../resources/headshot.jpg";

function Body() {
  return (
    <main>
      <div className="homeScreen">
        <header>
          <h2 id="home" className="intro"></h2>
        </header>
      </div>
      <div className="aboutMeBackground" id="aboutMe">
        <img
          className="headshot"
          src={headshot}
          alt="Sorry this image is unavailable"
        />
        <h3 className="description">
          Hello, my name is Brandon Ortiz and I was born and raised in Houston,
          Texas. I am currently a sophomore attending Trinity University in San
          Antonio, Texas, where I am pursuing my B.S. in Computer Science. I am
          an aspiring software and web developer with interest in web3 and
          blockchain development. I am working as a Junior Developer at Varsity
          Hype, a sports tech company based out of Houston, Texas. I have a
          passion for sports, soccer in specific, and for learning new things. I
          am always open to growth as a person and as a developer.
        </h3>
      </div>
    </main>
  );
}

export default Body;
