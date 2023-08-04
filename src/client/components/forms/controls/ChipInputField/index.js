import ChipErr from "@components/ChipErr";
import { IoCloseOutline } from "react-icons/io5";
import classNames from "classnames";
import { forwardRef } from "react";
import useThemeStore from "@hooks/useTheme";
import React from "react"

const ChipInputField = forwardRef(
  (
    {
      errorMessage,
      required,
      fluid,
      allowClear,
      clearHandler,
      id,
      label,
      icon,
      ...rest
    },
    ref
  ) => {
    const theme = useThemeStore((state) => state);
    return (
      <div
        className={classNames("relative mx-auto", {
          "max-w-sm": !fluid && theme.size === "small",
          "max-w-md": !fluid && theme.size === "medium",
          "max-w-lg": !fluid && theme.size === "large",
          "max-w-full": fluid,
        })}
      >
        <div className="relative group">
          <input
            ref={ref}
            {...rest}
            id={rest.name}
            autoComplete="off"
            aria-describedby={`outline_err_${rest.name}`}
            className={classNames(
              `block px-2.5 pb-2.5 w-full shadow text-${theme.fontSize}  text-zinc-950  rounded-md border ${errorMessage
                ? "border-error focus:border-error"
                : `border-${theme.color}-300 focus:border-${theme.color}-300`
              } appearance-none  focus:outline-none focus:ring-0   peer`,
              {
                "bg-gray-100 cursor-not-allowed": rest.readOnly,
                "bg-white": !rest.readOnly,
              }
            )}
            placeholder={rest.readOnly ? "" : " "}
          />
          <div className="flex items-center gap-2">
            <div
              className={classNames(
                "absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4  -translate-y-2/4 ",
                { "right-8": icon, "right-3": !icon }
              )}
            >
              {allowClear && rest?.value?.length > 0 && (
                <div className="z-10 p-1 text-gray-500 rounded-md hover:bg-red-50 hover:text-red-800 ">
                  <IoCloseOutline
                    className="hidden cursor-pointer group-hover:block"
                    onClick={clearHandler}
                  />
                </div>
              )}
            </div>
            <div
              className={classNames(
                "absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-2 -translate-y-2/4 ",
                {}
              )}
            >
              {icon && icon}
            </div>
          </div>
          {!rest.readOnly && (
            <label
              htmlFor={rest.name}
              className={`absolute text-${theme.fontSize} text-zinc-950 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
            >
              {label} {required && <span className="text-error">*</span>}
            </label>
          )}
        </div>
        {errorMessage && (
          <ChipErr msg={errorMessage} id={`outline_err_${rest.name}`} />
        )}
      </div>
    );
  }
);
export default ChipInputField;
