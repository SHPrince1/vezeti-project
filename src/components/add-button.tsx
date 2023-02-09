import React from "react";
import style from "../styles/addbtn.module.css";
import cart from "../images/cart.jpeg"

const AddButton = () => {
  return (
    <>
      <div className={style.btnBox}>
        <button>ADD ITEM</button>
      </div>
    </>
  );
};

export default AddButton;
