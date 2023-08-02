import { IoChevronDownOutline, IoCloseOutline } from "react-icons/io5";
import Select, { components } from "react-select";

import classNames from "classnames";
import { forwardRef } from "react";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <IoChevronDownOutline />
    </components.DropdownIndicator>
  );
};
const ClearIndicator = (props) => {
  return (
    <components.ClearIndicator {...props}>
      <IoCloseOutline />
    </components.ClearIndicator>
  );
};
const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      <IoCloseOutline />
    </components.MultiValueRemove>
  );
};
const controlStyles = {
  base: "border appearance-none rounded-md  shadow",
  focus: " ring-0 outline-none peer",
  nonFocus: " ",
};
const placeholderStyles = "text-gray-500 pl-1 py-0.5 ";
const selectInputStyles = "pl-1 py-0.5 ";
const valueContainerStyles = "p-1 gap-1";
const singleValueStyles = "leading-7 ml-1";
const multiValueStyles =
  "bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5";
const multiValueLabelStyles = "leading-6 py-0.5";
const multiValueRemoveStyles =
  "border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md";
const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles =
  "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800";
const indicatorSeparatorStyles = "bg-gray-300";
const dropdownIndicatorStyles =
  "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black";
const menuStyles = "p-1 mt-2 border border-gray-200 bg-white rounded-lg";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded",
  focus: "bg-gray-100 active:bg-gray-200",
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";
const CSelect = forwardRef((props, ref) => {
  const { setIsFocus, errorMessage, border, allowClear, readOnly, ...rest } =
    props;
  const controlCompo = (isFocused) => {
    setTimeout(() => {
      setIsFocus(isFocused);
    }, 0);
    return classNames(
      isFocused ? controlStyles.focus : controlStyles.nonFocus,
      `${controlStyles.base} ${border} ${
        readOnly
          ? "bg-gray-100 hover:cursor-not-allowed"
          : "bg-white hover:cursor-pointer"
      } `
    );
  };
  return (
    <Select
      ref={ref}
      {...rest}
      isClearable={allowClear && !readOnly}
      // menuIsOpen={readOnly ? false : true}
      closeMenuOnSelect={true}
      hideSelectedOptions={false}
      unstyled
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",
            outline: "none",
          },
        }),
        // On mobile, the label will truncate automatically, so we want to
        // override that behaviour.
        multiValueLabel: (base) => ({
          ...base,
          whiteSpace: "normal",
          overflow: "visible",
        }),
        control: (base) => ({
          ...base,
          transition: "none",
        }),
      }}
      components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
      classNames={{
        control: ({ isFocused }) => controlCompo(isFocused),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
          classNames(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base
          ),
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
      {...rest}
    />
  );
});
export default CSelect;
