import ChipErr from "@components/ChipErr";
import { IoCloseOutline } from "react-icons/io5";
import classNames from "classnames";
import { format } from "date-fns";
import { forwardRef } from "react";
import React from "react"

const ButtonInput = forwardRef(
  (
    {
      value,
      onClick,
      allowClear,
      clearHandler,
      required,
      label,
      theme,
      errorMessage,
      ...rest
    },
    ref
  ) => {
    return (
      <div>
        <div className="relative group">
          <input
            ref={ref}
            {...rest}
            value={value ? format(new Date(value), "dd MMMM yyyy") : ""}
            onClick={onClick}
            id={rest.name}
            autoComplete="off"
            aria-describedby={`outline_err_${rest.name}`}
            className={classNames(
              `block px-2.5 pb-2.5 pt-2 w-full shadow text-sm  text-zinc-950  rounded-md border ${errorMessage
                ? "border-error focus:border-error"
                : `border-${theme.color}-300 focus:border-${theme.color}-300`
              } appearance-none  focus:outline-none focus:ring-0   peer`,
              {
                "bg-gray-100 cursor-not-allowed": rest.readOnly,
                "bg-white": !rest.readOnly,
              }
            )}
            placeholder=" "
          />
          <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4 ">
            {allowClear && value?.length > 0 && (
              <div className="p-1 text-gray-500 rounded-md hover:bg-red-50 hover:text-red-800 ">
                <IoCloseOutline
                  className="hidden cursor-pointer group-hover:block"
                  onClick={clearHandler}
                />
              </div>
            )}
          </div>
          {
            <label
              htmlFor={rest.name}
              className="absolute text-sm text-zinc-950 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              {label} {required && <span className="text-error">*</span>}
            </label>
          }
        </div>
        {errorMessage && (
          <ChipErr msg={errorMessage} id={`outline_err_${rest.name}`} />
        )}
      </div>
    );
  }
);

export default ButtonInput;
