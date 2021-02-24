import React from "react";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div>
      <div className="checkoutProduct">
        <img src={image} alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price ">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating).fill("♥️")}
          </div>
          <button onClick={removeFromBasket}>remove from the basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
