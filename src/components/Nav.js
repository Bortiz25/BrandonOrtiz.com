// function component that will render the nav bar on the site

function Nav() {
  // this return method will render all that is needed for the nav bar
  return (
    <nav className="navBar">
      <div className="navLogo">
        <h4>
          <a href="#home">Brandon Ortiz.</a>
        </h4>
      </div>
      <ul className="navList">
        <li className="navTags">
          <a href="#aboutMe">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
