import React from "react";

const Backdrop = ({handlemodal}) => {
  return <div className="backdrop" onClick={handlemodal}></div>;
};

export default Backdrop;
