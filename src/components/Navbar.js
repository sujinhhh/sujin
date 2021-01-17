import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.inner <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/" className="navbar-logo">
          <i class="fas fa-grin-hearts fa-2x"> Dream</i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/me" className="nav-links" onClick={closeMobileMenu}>
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              My work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              My work
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn-outline">SIGN UP</Button>}
      </div>
    </nav>
  );
};

export default Navbar;
