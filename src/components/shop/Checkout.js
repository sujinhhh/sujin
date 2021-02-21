import React from "react";
import { useStateValue } from "../../StateProvider";
import "./shop.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div>
        {basket?.length === 0 ? (
          <h2> Your shoping basket is empty</h2>
        ) : (
          <div>
            <h2 className="checkout__title"> Your shoping basket </h2>
            {/* List out all of the checkout Product */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <h1>Subtotal</h1>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
