import React from "react";
import style from "./Ship.module.css";

function Ship() {
  return (
    <div className={style.ship}>
      <div className={style.shipcontent}>
        <i className="fa-solid fa-truck-fast"></i>
        <h1>Free Shipping</h1>
        <p>Free Shipping on all orders over $100</p>
      </div>
      <div className={style.shipcontent}>
        <i className="fa-solid fa-bowl-food"></i>
        <h1>Free Shipping</h1>
        <p>Free Shipping on all orders over $100</p>
      </div>
      <div className={style.shipcontent}>
        <i className="fa-solid fa-medal"></i>
        <h1>Free Shipping</h1>
        <p>Free Shipping on all orders over $100</p>
      </div>
      <div className={style.shipcontent}>
        <i className="fa-solid fa-headset"></i>
        <h1>Free Shipping</h1>
        <p>Free Shipping on all orders over $100</p>
      </div>
    </div>
  );
}

export default Ship;
