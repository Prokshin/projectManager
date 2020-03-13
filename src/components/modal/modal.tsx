import React, { useState, ReactChild } from "react";
import "./modal.css";

interface IModalProps {
  buttonText: string;
  children?: ReactChild;
}

const Modal = (props: IModalProps) => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  let open = "";
  if (!isOpen) {
    open = "hidden";
  }

  return (
    <>
      <button className="button green-bg" onClick={openModal}>
        {props.buttonText}
      </button>
      <div className={`modal ${open}`}>
        <div onClick={closeModal} className="modal__close">
          <ion-icon name="close" />
        </div>
        <div className="modal__content">{props.children}</div>
      </div>
    </>
  );
};

export default Modal;
