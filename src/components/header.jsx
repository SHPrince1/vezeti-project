import React from "react";
import style from "../styles/header.module.css";
import carts from "../images/carts.jpeg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../components/cart.js";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div className={style.parentBox}>
        <div className={style.logoBox}>
          <Link to="/">
            <h1>VEZETE</h1>
          </Link>
          <div className={style.links}>
            <Link to="/">
              
               
                <h6>Home |</h6>
             
            </Link>
            <h6>Sign up |</h6>
            <h6>Login</h6>
          </div>
        </div>
        <div className={style.textBox}>
          <h1> {cart} Items added to cart</h1>
          <Link to="/cart">
            <img src={carts} alt="images" className={style.imgName} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
