import { IoCloseOutline } from "react-icons/io5";
import classNames from "classnames";
import { forwardRef } from "react";
import useThemeStore from "../../hooks/useTheme";
const ChipInput = forwardRef(({ fluid, ...rest }, ref) => {
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
      <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4 ">
        <IoCloseOutline className="cursor-pointer" />
      </div>
      <input
        ref={ref}
        {...rest}
        className={`block w-full px-3 py-2 text-sm bg-white border border-${theme.color}-300 rounded-md shadow outline-none appearance-none focus:border focus:border-${theme.color}-300 focus:ring-0 placeholder:text-zinc-500 text-zinc-950`}
      />
    </div>
  );
});

export default ChipInput;
