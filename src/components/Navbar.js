import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { auth } from "../firebase/config";
import { useStateValue } from "../StateProvider";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [{ user }] = useStateValue();
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

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
    <nav className={`navbar ${show && "nav__black"}`}>
      {/* logo */}

      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="./logo.gif" alt="" />
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
          {/* <li className="nav-item">
            <Link to="/movie" className="nav-links" onClick={closeMobileMenu}>
              Movie
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
              shop
            </Link>
          </li> */}

          <li className="nav-item">
            <Link to={!user && "/login"} className="nav-links-mobile">
              <div onClick={login} className="header__option">
                <span className="header__optionLineOne">
                  Hello, {user?.email}
                </span>
                <span className="header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
          </li>
        </ul>
        {button && (
          <Button buttonStyle="btn--outline">
            <Link to={!user && "/login"} className="login-button">
              <div onClick={login} className="header__option">
                <span className="header__optionLineOne">
                  Hello, {user?.email}
                </span>
                <span className="header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
