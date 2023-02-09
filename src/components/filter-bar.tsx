import React from "react";
import style from "../styles/filterbar.module.css";

const FilterBar = (props) => {

  return (
    <>
      <div className={style.parentBox}>
        <div className={style.logoBox}>
          <form>
            <input placeholder="Search item" 
           
            />
          </form>

          {/* <select>
            <option className={style.optionS} value="all">
              {" "}
              ALL
            </option>
            <option value="technology"> TECHNOLOGY</option>
            <option value="wears"> WEARS</option>
          
          </select> */}
        </div>
      </div>
    </>
  );
};

export default FilterBar;
