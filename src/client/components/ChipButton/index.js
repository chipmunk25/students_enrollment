import classNames from "classnames";
import React from "react";
import useThemeStore from "../../hooks/useTheme";
const ChipButton = (props) => {
  const {
    title,
    disabled,
    fluid,
    position,
    icon,
    primary,
    ...rest
  } = props;
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
      <button
        title={title}
        disabled={disabled}
        {...rest}
        className={`
        w-full
      outline-0 relative align-middle transform-none border-solid py-2 ${primary
            ? `bg-${theme.color}-500 border-transparent text-white hover:bg-${theme.color}-600`
            : "bg-grey-500 border-btn text-black border hover:bg-grey-600"
          }  select-none transition-all inline-flex justify-center items-center rounded   px-6 
       ${disabled
            ? "bg-disabled  text-mainText cursor-not-allowed hover:bg-disabled"
            : "cursor-pointer shadow-btn"
          }
      `}
      >
        {icon && position === "left" && (
          <div
            className={` w-5 h-5 m-0 mr-3 inline-flex items-center justify-center`}
          >
            {icon}
          </div>
        )}
        <span
          className={` leading-snug  font-semibold text-ellipsis whitespace-nowrap overflow-hidden`}
        >
          {title}
        </span>
        {icon && position === "right" && (
          <div
            className={` w-5 h-5 m-0 ml-3 inline-flex items-center justify-center`}
          >
            {icon}
          </div>
        )}
      </button>
    </div>
  );
};
export default ChipButton;
