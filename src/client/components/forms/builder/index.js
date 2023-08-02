import React from "react";
import Constant from "@utils/constant";
import {
  ChipDateField,
  ChipInputField,
  ChipSelectField,
  ChipPasswordField,
} from "../controls";
import ChipButton from "../../ChipButton";
const ChipFormBuilder = ({ config, formik }) => {
  return (
    <React.Fragment>
      <div className="space-y-4">
        {config.map((formInput, index) => {
          switch (formInput.type) {
            case Constant.TEXT:
            case Constant.EMAIL:
              return (
                <ChipInputField
                  key={index}
                  {...formInput}
                  value={formik.values[formInput.name]}
                  error={formik.errors[formInput.name]}
                  errorMessage={
                    formik.touched[formInput.name] &&
                    formik.errors[formInput.name]
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  allowClear
                  clearHandler={() => formik.setFieldValue(formInput.name, "")}
                />
              );
            case Constant.PASSWORD:
              return (
                <ChipPasswordField
                  key={index}
                  {...formInput}
                  value={formik.values[formInput.name]}
                  error={formik.errors[formInput.name]}
                  errorMessage={
                    formik.touched[formInput.name] &&
                    formik.errors[formInput.name]
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  allowClear
                  clearHandler={() => formik.setFieldValue(formInput.name, "")}
                />
              );
            case Constant.DATE:
            case Constant.RANGE:
              return (
                <ChipDateField
                  key={index}
                  {...formInput}
                  value={formik.values[formInput.name]}
                  horizontal={formInput.type === Constant.RANGE}
                  errorMessage={
                    formik.touched[formInput.name] &&
                    formik.errors[formInput.name]
                  }
                  size={formInput.size}
                  border={formInput.border}
                  borderColor={formInput.borderColor}
                  onBlur={formik.handleBlur}
                  onChange={(value) => {
                    formik.setFieldValue(formInput.name, value);
                  }}
                />
              );
            case Constant.SELECT:
              return (
                <ChipSelectField
                  key={index}
                  {...formInput}
                  value={formik.values[formInput.name]}
                  error={formik.errors[formInput.name]}
                  errorMessage={
                    formik.touched[formInput.name] &&
                    formik.errors[formInput.name]
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  allowClear
                />
              );
            case Constant.SUBMIT:
            case Constant.BUTTON:
              return (
                <ChipButton
                  key={index}
                  {...formInput}
                />
              );
            default:
              return <div key={index}>Unsupported field</div>;
          }
        })}
      </div>
    </React.Fragment>
  );
};
export default ChipFormBuilder;
