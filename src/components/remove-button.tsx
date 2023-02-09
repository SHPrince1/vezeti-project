import React from "react";
import style from "../styles/removebtn.module.css";


const RemoveBtn = () => {
  return (
    <>
      <div className={style.btnBox}>
        <button className={style.remBtn}>REMOVE ITEM</button>
      </div>
    </>
  );
};

export default RemoveBtn;
