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
            title="standing lamp"
            price={4000}
            rating={5}
            image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80"
          />
          <Product
            id="2"
            title="Cup cake"
            price={3000}
            rating={5}
            image="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Strawberries"
            price={1000}
            rating={5}
            image="https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          />
          <Product
            id="1"
            title="web developer"
            price={4000}
            rating={5}
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="web developer"
            price={4000}
            rating={5}
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
          />
          <Product
            id="1"
            title="web developer"
            price={4000}
            rating={5}
            image="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
          />
        </div>
      </div>
    </div>
  );
}

export default ShopHome;
