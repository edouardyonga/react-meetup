import Modal from "./Modal";
import Backdrop from "./Backdrop";

import { useState } from "react";

const Todo = ({ title, description }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  return (
    <div>
      <div className="card">
        <h2>{title}</h2>
        <span>{description}</span>
        <div className="actions">
          <button className="btn" onClick={handleModal}>
            Delete
          </button>
        </div>
      </div>
      {showModal && <Modal handlemodal={handleModal} />}
      {showModal && <Backdrop handlemodal={handleModal} />}
    </div>
  );
};

export default Todo;
