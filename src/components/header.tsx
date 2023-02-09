import React from "react";
import style from "../styles/header.module.css";
import cart from "../images/cart.jpeg"

const Header = () => {
  return (
    <>
      <div className={style.parentBox}>
        <div className={style.logoBox}>
          <h1>VEZETE</h1>
          {/* <input /> */}
           
        </div>
        <div className={style.textBox}> 
          <img src={cart} alt="image" className={style.imgName}/>
        </div>

      
      </div>
    </>
  );
};

export default Header;
