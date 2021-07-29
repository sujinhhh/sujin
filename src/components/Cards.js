import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Parallax from "react-rellax";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <div className="cards__item-1">
              <Parallax speed={2.5}>
                <CardItem
                  src="https://images.unsplash.com/photo-1457732815361-daa98277e9c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  text="Shop!"
                  label="Sping"
                  path="/shop"
                />
              </Parallax>
              <Parallax speed={2}>
                <CardItem
                  src="https://images.unsplash.com/photo-1519225924453-b28226426689?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  text="Movie"
                  label="Fall"
                  path="/movie"
                />
              </Parallax>
              <Parallax speed={1.5}>
                <CardItem
                  src="https://images.unsplash.com/photo-1496205856088-91b021308c54?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1907&q=80"
                  text="My blogs"
                  label="Fall"
                  path="/blog"
                />
              </Parallax>
              <Parallax speed={1}>
                <CardItem
                  src="https://images.unsplash.com/photo-1490059830487-2f86fddb2b4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  text="Home"
                  label="winter"
                  path="/home"
                />
              </Parallax>
            </div>
          </ul>
        </div>
        {/* <div className="card-bg">
          <img
            src="https://images.unsplash.com/photo-1618123069754-cd64c230a169?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGJsYWNrJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}

export default Cards;
