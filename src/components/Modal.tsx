import React, { FunctionComponent, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  show: boolean;
  onClose: (arg0: boolean) => void;
  children: React.ReactNode;
  title: string;
}

const Modal: FunctionComponent<ModalProps> = ({
  show,
  onClose,
  children,
  title,
}) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    if (show) {
      setIsBrowser(true);
      document.body.style.overflow = "hidden";
    }
  }, [show]);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose(false);
    document.body.style.overflow = "scroll";
  };

  const modalContent: React.ReactNode | null = show ? (
    <div className="w-screen h-screen bg-black z-50 absolute top-0 bg-opacity-70 bg-white/5 backdrop-blur-sm">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-1/3 h-3/12 bg-white relative flex flex-col">
          <div
            className="absolute top-2 right-2 bg-white text-black font-bold text-2xl p-3 px-6 rounded-full cursor-pointer"
            // href="#"
            onClick={(e) => handleCloseClick(e)}
          >
            x
          </div>
          <div className="text-black font-bold w-full text-2xl pt-5 pl-5">
            {title}
          </div>
          <div className="h-full p-6 pt-4 overflow-scroll flex flex-col">
            {children}
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    const container: HTMLElement = document.getElementById("__next");
    return container ? ReactDOM.createPortal(modalContent, container) : null;
  }
  return null;
};

export default Modal;
