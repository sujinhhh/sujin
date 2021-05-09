import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const api = {
  key: "d7b669116cf36daad09f66d5ca1b1cb3",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Footer() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="footer-container">
      <div className="weather_container">
        <h1>Check out Weather for Today</h1>
        <div className="search_box">
          <input
            type="text"
            className="seach_bar"
            placeholder="eg.Toronto"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <>
            <div className="location_box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather_box">
              <div className="temp">
                {Math.round(weather.main.temp)} <small> ℃</small>
              </div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {/* <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link to="#">Careers</Link>
            <Link to="#">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="#">Contact</Link>
            <Link to="#">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="#">Submit Video</Link>
            <Link to="#">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="#">Instagram</Link>
            <Link to="#">Youtube</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="#" className="social-logo">
              Szzin
            </Link>
          </div>
          <small className="website-rights">Szzin © 2021</small>
          <div className="social-icons">
            <Link
              to="#"
              className="social-icon-link facebook"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              to="#"
              className="social-icon-link instagram"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              to="#"
              className="social-icon-link youtube"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              to="#"
              className="social-icon-link twitter"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              to="#"
              className="social-icon-link twitter"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section> */}
      <div className="social-media-wrap">
        <h4 className="website-rights">Szzin © 2021</h4>
      </div>
    </div>
  );
}

export default Footer;
