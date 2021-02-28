import React, { useEffect, useRef } from "react";
import "./CardsSecond.css";
import Rellax from "react-rellax";

function CardsSecond() {
  //   const rellaxRef = useRef();
  //   useEffect(() => {
  //     new Rellax(rellaxRef.current, {
  //       // <---- Via useRef element
  //       speed: -10,
  //       center: false,
  //       wrapper: null,
  //       round: true,
  //       vertical: true,
  //       horizontal: false,
  //     });
  //   }, []);
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__container">
          {/* <Rellax speed={-2}> */}
          <ul className="cards__items">
            <img
              src="https://images.unsplash.com/photo-1486783046960-64d2ef697c46?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
              alt=""
            />
          </ul>
          {/* </Rellax> */}
        </div>
      </div>
    </div>
  );
}

export default CardsSecond;
