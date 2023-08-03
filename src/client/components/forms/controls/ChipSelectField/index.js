import React, { useState } from "react";
import CSelect from "@components/Select";
import ChipErr from "@components/ChipErr";
import classNames from "classnames";
import useThemeStore from "@hooks/useTheme";
const ChipSelectField = (props) => {
  const { label, errorMessage, required, ...rest } = props;
  const theme = useThemeStore((state) => state);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div
      className={classNames("relative mx-auto", {
        "max-w-sm": !props.fluid && theme.size === "small",
        "max-w-md": !props.fluid && theme.size === "medium",
        "max-w-lg": !props.fluid && theme.size === "large",
        "max-w-full": props.fluid,
      })}
    >
      <div className="relative">
        <CSelect
          setIsFocus={setIsFocus}
          {...rest}
          border={errorMessage ? "border-error" : `border-${theme.color}-300`}
        />
        {rest.readOnly ? (
          <label className="absolute px-2 scale-100 -translate-y-1/2 cursor-not-allowed top-1/2"></label>
        ) : (
          <React.Fragment>
            <input
              type="checkbox"
              className="absolute origin-[0] -z-10 text-transparent border-0 outline-none  focus:border-0 focus:ring-0 peer"
              id="checker"
            />
            <label
              htmlFor="checker"
              className={classNames(
                " absolute text-sm text-zinc-950 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 duration-300 transform   z-10 origin-[0] bg-white  px-2    left-1",
                {
                  "-translate-y-4 scale-75 top-2 px-2 ":
                    rest?.value?.value || isFocus,
                  "scale-100 top-1/2 -translate-y-1/2":
                    !isFocus || !rest?.value?.value,
                }
              )}
            >
              {label} {required && <span className="text-error">*</span>}
            </label>
          </React.Fragment>
        )}
      </div>
      {errorMessage && (
        <ChipErr msg={errorMessage} id={`outline_err_${rest.name}`} />
      )}
    </div>
  );
};
export default ChipSelectField;
