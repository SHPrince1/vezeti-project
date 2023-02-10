import React from "react";
import style from "./styles/cards.module.css";
import  Modal  from '../components/modal';


const Cards = (props) => {
  return (
    <>
      <div className={style.parentBox}>
        <div className={style.cardBox}>
          <div className={style.imgBox}>
            <img src={props.img}  alt="product name"/>
          </div>

          <div className={style.nameBox}>
           <p className={style.name}>{props.name}</p>

          </div>
          <div className={style.priceBox}>
            <p className={style.price}>{props.price}</p>
         
          < Modal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
