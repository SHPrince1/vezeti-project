import React from "react";
import {  useDispatch } from "react-redux";
import style from "../styles/card.module.css";
// import Modal from "./modal";
const Cards = (props) => {
  // const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC", payload:props });
  };

  const decrement = () => {
    dispatch({ type: "DEC" });
  }; 

  

  return (
    <>
      <div className={style.parentBox}>
        <div className={style.cardBox}>
          <div className={style.imgBox}>
            <img src={props.img} alt="product name" />
          </div>

          <div className={style.nameBox}>
            <p className={style.name}>{props.name}</p>
          </div>
          <div className={style.priceBox}>
            <p className={style.price}>{props.price}</p>

            {/* <Modal /> */}
            <div className={style.Btn}>
              <button onClick={increment}>ADD</button>
              <button onClick={decrement}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
