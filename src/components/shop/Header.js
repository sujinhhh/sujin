import React from "react";
import "./shop.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase/config";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <div className="nav-container">
        {/* shop logo */}
        <Link to="/">
          <img
            className="header__logo"
            src="https://sujinhhh.github.io/deploy/mingle.png"
            alt="chan"
          />
          {/* <h1>Design shop</h1> */}
        </Link>
        {/* Search Box */}
        <div className="header__nav__container">
          <div className="header__search">
            <input type="text" className="header__searchInput" />
            <i className="fas fa-search fa-border" />
          </div>

          {/* Links */}
          <div className="header__nav">
            {/* check out */}
            <Link to={!user && "/login"} className="header__link">
              <div onClick={login} className="header__option">
                <span className="header__optionLineOne">
                  Hello,{user?.email}
                </span>
                <span className="header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
            {/* Orders */}
            {/* <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne"> To main homepage</span>
              <span className="header__optionLineTwo"> GO!</span>
            </div>
          </Link> */}
            {/* your Prime */}
            <Link to="/checkout" className="header__link">
              <div className="header__option">
                <span className="header__optionLineOne"> Let's check your</span>
                <span className="header__optionLineTwo"> Shopping Cart</span>
              </div>
            </Link>
          </div>
          {/* Basket icon with number */}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              {/* shopping icon */}
              <i className="fas fa-shopping-cart"></i>
              {/* number of item */}
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
