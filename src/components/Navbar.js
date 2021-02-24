import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "./Button";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <nav className="navbar">
      {/* logo */}

      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <span>Szzin</span>
        </Link>

        {/*  Nav burger menu  */}

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work" className="nav-links" onClick={closeMobileMenu}>
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/fun" className="nav-links" onClick={closeMobileMenu}>
              Fun
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Log In
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">Log In</Button>}
      </div>
    </nav>
  );
};

export default Navbar;
