import React from "react";

const Modal = ({ handlemodal }) => {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={handlemodal}>
        cancel
      </button>
      <button className="btn" onClick={handlemodal}>
        confirm
      </button>
    </div>
  );
};

export default Modal;
