import React from "react";
import useCommonStore from "../../hooks/useCommon";
import { ModalSizes } from "../../utils/inputLayout";

const resetData = {
  show: false,
  title: "",
  size: "small",
  content: null,
};
const Modal = ({ title, children, size }) => {
  const common = useCommonStore((state) => state);

  return (
    <div>
      <div
        className="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalScrollable"
        tabIndex="-1"
        aria-labelledby="exampleModalScrollableLabel"
        style={{ display: "block" }}
        aria-modal="true"
        role="dialog"
        data-te-open="true"
      >
        <div className="fixed inset-0 transition-opacity backdrop-blur-sm bg-black/30"></div>
        <div className={`${ModalSizes(size)}`}>
          <div className="pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-b-lg border-none bg-white bg-clip-padding text-current shadow-lg outline-none ">
            <header className="flex items-center justify-between px-4 py-2 bg-gray-100">
              <div className="flex items-center justify-start gap-2">
                <i className="text-gray-400 fa-solid fa-grip-lines"></i>
                <span>{title}</span>
              </div>
              <div>
                <button onClick={() => common.changeModal(resetData)}>
                  <i className="text-gray-400 fa-solid fa-xmark"></i>
                </button>
              </div>
            </header>
            <div className="relative p-4 overflow-y-auto">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
