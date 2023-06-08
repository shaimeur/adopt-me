import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  useEffect(() => {
    const modalRoot = document.querySelector("#modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current); // component will unmount for clean up purposes
  }, []);
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
