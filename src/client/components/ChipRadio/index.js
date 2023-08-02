import classNames from "classnames";
import useThemeStore from "../../hooks/useTheme";

const ChipRadio = ({ options, fluid }) => {
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
      <div className="flex flex-wrap py-5">
        {options?.map((option, idx) => (
          <div className="flex items-center mr-4" key={idx}>
            <input
              checked
              id="purple-radio"
              type="radio"
              value=""
              name="colored-radio"
              className={`w-4 h-4 text-${theme.color}-600 bg-white border-${theme.color}-300 shadow focus:ring-${theme.color}-500 focus:ring-2 `}
            />
            <label
              htmlFor="purple-radio"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipRadio;
