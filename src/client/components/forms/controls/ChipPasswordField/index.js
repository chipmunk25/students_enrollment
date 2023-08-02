import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import ChipInputField from "../ChipInputField";
import { useState } from "react";
const ChipPasswordField = (props) => {
  const [reveal, setReveal] = useState(false);
  return (
    <ChipInputField
      {...props}
      type={reveal ? "text" : "password"}
      icon={
        reveal ? (
          <IoEyeOutline
            className="hover:cursor-pointer"
            onClick={() => setReveal(!reveal)}
          />
        ) : (
          <IoEyeOffOutline
            className="hover:cursor-pointer"
            onClick={() => setReveal(!reveal)}
          />
        )
      }
    />
  );
};
export default ChipPasswordField;
