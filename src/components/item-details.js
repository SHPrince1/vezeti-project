import React from 'react'
import style from "../styles/itemdetails.module.css";




const ItemDetails = (props) => {
  return (
    <div>
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
          {/* <button>See Details</button> */}
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails