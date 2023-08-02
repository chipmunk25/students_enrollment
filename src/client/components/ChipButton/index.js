import React, { forwardRef } from "react";
import { useButton } from "react-aria";

const ChipButton = forwardRef((props, ref) => {
  let { buttonProps } = useButton(props, ref);
  let { className, children } = props;
  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
});

export default ChipButton;
