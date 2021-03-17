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
                src="https://images.unsplash.com/photo-1457732815361-daa98277e9c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                text="Getting to know about Me!"
                label="Sping"
                path="/about"
              />

              <CardItem
                src="https://images.unsplash.com/photo-1465628976988-fe43bda15798?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1952&q=80"
                text="my projects"
                label="Summer"
                path="/work"
              />
            </ul>
          </Parallax>
          <Parallax speed={1}>
            <ul className="cards__items">
              <CardItem
                src="https://images.unsplash.com/photo-1496205856088-91b021308c54?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1907&q=80"
                text="My blogs"
                label="Fall"
                path="/blog"
              />
              <CardItem
                src="https://images.unsplash.com/photo-1490059830487-2f86fddb2b4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
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
