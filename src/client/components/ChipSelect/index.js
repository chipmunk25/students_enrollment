import Select from "react-select";
import classNames from "classnames";
import useThemeStore from "../../hooks/useTheme";

const customStyles = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    height: "inherit",
    minHeight: 0,
    outline: "none",
    border: "none",
    alignItems: "normal",
    background: "transparent",
    borderColor: state.isFocused ? "transparent" : "transparent",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "transparent" : "transparent",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    verticalAlign: "middle",
    padding: "0px 8px",
    height: "inherit",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
};
const ChipSelect = (props) => {
  const theme = useThemeStore((state) => state);

  return (
    <div
      className={classNames("relative mx-auto", {
        "max-w-sm": !props.fluid && theme.size === "small",
        "max-w-md": !props.fluid && theme.size === "medium",
        "max-w-lg": !props.fluid && theme.size === "large",
        "max-w-full": props.fluid,
      })}
    >
      <Select
        {...props}
        classNamePrefix="select-selection"
        menuPortalTarget={document.body}
        className={`block w-full text-sm bg-white border border-${theme.color}-300 rounded-md shadow outline-none appearance-none placeholder:text-zinc-500 text-zinc-950`}
        styles={{
          ...customStyles,
        }}
      />
    </div>
  );
};

export default ChipSelect;
