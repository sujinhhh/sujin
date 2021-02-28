import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { useState, useEffect } from "react";
import Parallax from "react-rellax";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <Parallax speed={4}>
            <ul className="cards__items">
              <CardItem
                src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80"
                text="Getting to know about Me!"
                label="Sping"
                path="/about"
              />

              <CardItem
                src="https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
                text="Do you want to see my awesome projects?"
                label="Summer"
                path="/work"
              />
            </ul>
            <h1>Seasons!</h1>
          </Parallax>
          <Parallax speed={1}>
            <ul className="cards__items">
              <CardItem
                src="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                text="My blogs"
                label="Fall"
                path="/blog"
              />
              <CardItem
                src="https://images.unsplash.com/photo-1422207134147-65fb81f59e38?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbnRlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                text="My ecommerce website project"
                label="winter"
                path="/shop"
              />
            </ul>
          </Parallax>
        </div>
      </div>
    </div>
  );
}

export default Cards;
