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
          <i className="fas fa-grin-hearts"> 부산국토종합설비</i>
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
            <Link to="/me" className="nav-links" onClick={closeMobileMenu}>
              회사소개
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              프로젝트
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              BLOG
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              무료상담
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">무료상담</Button>}
      </div>
    </nav>
  );
};

export default Navbar;
