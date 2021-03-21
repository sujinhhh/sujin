import React, { useState } from "react";
import "./Footer.css";
import { Button } from "../Button";
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
        <div className="search_box">
          <input
            type="text"
            className="seach_bar"
            placeholder="Check out Weather Today.."
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
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Me</h2>
            <Link to="#">Careers</Link>
            <Link to="#">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="#">Contact</Link>
            <Link to="#">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="#">Submit Video</Link>
            <Link to="#">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="#">Instagram</Link>
            <Link to="#">Youtube</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="#" className="social-logo">
              Szzin
            </Link>
          </div>
          <small class="website-rights">Szzin © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="#"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="#"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link class="social-icon-link youtube" to="#" aria-label="Youtube">
              <i class="fab fa-youtube" />
            </Link>
            <Link class="social-icon-link twitter" to="#" aria-label="Twitter">
              <i class="fab fa-twitter" />
            </Link>
            <Link class="social-icon-link twitter" to="#" aria-label="LinkedIn">
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
