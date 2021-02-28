import React from "react";
import "./shop.css";
import Product from "./Product";

function ShopHome() {
  return (
    <div className="main-image">
      <img
        className="home__image"
        src="https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
        alt="hh"
      />

      {/* product */}
      <div className="home-product">
        <div className="home__row">
          <Product
            id="1"
            title="web developer"
            price={4000}
            rating={5}
            image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80"
          />
          <Product
            id="1"
            title="web developer"
            price={4000}
            rating={5}
            image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80"
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="web developer"
            price={4000}
            rating={5}
            image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80"
          />
          <Product
            id="1"
            title="web developer"
            price={4000}
            rating={5}
            image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80"
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="web developer"
            price={4000}
            rating={5}
            image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80"
          />
          <Product
            id="1"
            title="web developer"
            price={4000}
            rating={5}
            image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default ShopHome;
