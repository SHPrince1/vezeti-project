import React from "react";
import style from "../styles/header.module.css";
import cart from "../images/cart.jpeg";
import { useSelector  } from "react-redux";

const Header = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <div className={style.parentBox}>
        <div className={style.logoBox}>
          <h1>VEZETE</h1>
          <div className={style.links}>
            <h6>Home |</h6>
            <h6>Sign up |</h6>
            <h6>Login</h6>
          </div>
        </div>
        <div className={style.textBox}>
          <h1> {counter} Items added to cart</h1>
          <img src={cart} alt="images" className={style.imgName} />
        </div>
      </div>
    </>
  );
};

export default Header;
