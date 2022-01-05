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
    <div className="w-screen h-screen z-50 absolute top-0 bg-opacity-70 bg-white/5 backdrop-blur-sm">
      <div className="w-full h-full flex justify-center items-center p-3 lg:p-0">
        <div className="w-full lg:w-1/3 xl:w-1/4 h-3/12 bg-gray-50 relative flex flex-col px-3 py-2 rounded-md mx-2">
          <div className="w-full h-full overflow-hidden flex flex-col">
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
