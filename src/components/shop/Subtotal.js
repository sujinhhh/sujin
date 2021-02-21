import React from "react";
import "./shop.css";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}items):{`${value}`}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This is order container
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed to checout</button>
    </div>
  );
}

export default Subtotal;
