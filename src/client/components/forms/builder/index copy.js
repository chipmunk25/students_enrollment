import React from "react";
import Constant from "@utils/constant";
import {
  ChipDateField, ChipInputField, ChipSelectField, ChipPasswordField
} from "../controls";
const ChipFormBuilder = ({
  config,
  formik,
  inline,
  size,
  border,
  borderColor,
}) => {
  return (
    <React.Fragment>
      {/* {config.map((c, i) => {
        return setTimeout(() => builder(c, i), 0);
      })} */}
      {config.map((c, i) => {
        return builder(c, i, formik);
      })}
    </React.Fragment>
  );
};
const builder = (formInput, key, formik) => {
  switch (formInput.type) {
    case Constant.TEXT:
      return (
        <ChipInputField
          key={key}
          {...formInput}
          value={formik.values[formInput.name]}
          error={formik.errors[formInput.name]}
          errorMessage={
            formik.touched[formInput.name] && formik.errors[formInput.name]
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          allowClear
          clearHandler={formik.setFieldValue(formInput.name, "")}
        />
      );
    case Constant.EMAIL:
      return (
        <ChipInputField
          key={key}
          {...formInput}
          value={formik.values[formInput.name]}
          error={formik.errors[formInput.name]}
          errorMessage={
            formik.touched[formInput.name] && formik.errors[formInput.name]
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          allowClear
          clearHandler={formik.setFieldValue(formInput.name, "")}
        />
      );
    case Constant.PASSWORD:
      return (
        <ChipPasswordField
          key={key}
          {...formInput}
          value={formik.values[formInput.name]}
          error={formik.errors[formInput.name]}
          errorMessage={
            formik.touched[formInput.name] && formik.errors[formInput.name]
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          allowClear
          clearHandler={formik.setFieldValue(formInput.name, "")}
        />
      );
    case Constant.DATE:
      return (
        <ChipDateField
          key={key}
          {...formInput}
          value={formik.values[formInput.name]}
          horizontal={inline}
          errorMessage={
            formik.touched[formInput.name] && formik.errors[formInput.name]
          }
          size={size}
          border={border}
          borderColor={borderColor}
          onBlur={formik.handleBlur}
          onChange={(value) => {
            formik.setFieldValue(formInput.name, value);
          }}
        />
      );
    case Constant.RANGE:
      return (
        <ChipDateField
          key={key}
          {...formInput}
          value={formik.values[formInput.name]}
          horizontal={inline}
          errorMessage={
            formik.touched[formInput.name] && formik.errors[formInput.name]
          }
          size={size}
          border={border}
          borderColor={borderColor}
          onBlur={formik.handleBlur}
          onChange={(value) => {
            formik.setFieldValue(formInput.name, value);
          }}
        />
      );
    case Constant.SELECT:
      return (
        <ChipSelectField
          key={key}
          {...formInput}
          value={formik.values[formInput.name]}
          error={formik.errors[formInput.name]}
          errorMessage={
            formik.touched[formInput.name] && formik.errors[formInput.name]
          }
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          allowClear
        // clearHandler={formik.setFieldValue(formInput.name, "")}
        />
      );
    default:
      return <div>Unsupported field</div>;
  }
};
export default ChipFormBuilder;
