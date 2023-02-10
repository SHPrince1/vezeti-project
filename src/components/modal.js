import React, { useState } from "react";
import "../styles/moda.css";
import Cart from "../components/cart";



const Modal = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = (props) => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        See Details
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

           
        
            <Cart />
            <button className="cus-btn" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
