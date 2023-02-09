import React from "react";
import style from "../styles/cards.module.css";


const Cards = (props) => {
  return (
    <>
      <div className={style.parentBox}>
        <div className={style.cardBox}>
          <div className={style.imgBox}>
            <img src={props.img} />
          </div>

          <div className={style.nameBox}>
           <p className={style.name}>{props.name}</p>

          </div>
          <div className={style.priceBox}>
            <p className={style.price}>{props.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
