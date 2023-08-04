import { Dialog, Transition } from "@headlessui/react";

import { Fragment } from "react";
import { IoCloseOutline } from "react-icons/io5";
import classNames from "classnames";
import useThemeStore from "../../hooks/useTheme";

const Drawer = ({ isDrawerOpen, onClose, children, right, title }) => {
  const theme = useThemeStore((state) => state);
  return (
    <Transition.Root show={isDrawerOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity backdrop-blur-sm bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={classNames(
                "fixed inset-y-0 flex max-w-full p-2 pointer-events-none",
                { "right-0 pl-28": right, "left-0 pr-28": !right }
              )}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom={classNames({
                  "translate-x-full": right,
                  "-translate-x-full": !right,
                })}
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo={classNames({
                  "translate-x-full": right,
                  "-translate-x-full": !right,
                })}
              >
                <Dialog.Panel className="relative w-screen max-w-sm pointer-events-auto ">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 flex pt-4 pr-2 ml-8 sm:-ml-10 sm:pr-4"></div>
                  </Transition.Child>
                  <div
                    className={`flex flex-col h-full py-6 overflow-y-scroll  rounded-md shadow-xl  bg-${theme.color}-${theme.lightbg} dark:bg-${theme.color}-${theme.darkbg}`}
                  >
                    <div className="flex items-center justify-between px-4 sm:px-6">
                      <Dialog.Title className="text-xl font-semibold leading-6 text-gray-900">
                        {title}
                      </Dialog.Title>
                      <button
                        onClick={onClose}
                        type="button"
                        className="box-content border-none rounded-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                      >
                        <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                          <IoCloseOutline className="cursor-pointer" />
                        </span>
                      </button>
                    </div>
                    <div className="relative flex-1 px-4 mt-6 sm:px-6">
                      {children}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Drawer;
