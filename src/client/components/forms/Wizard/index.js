import React, { useEffect, useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormBuilder from "../builder";
import ValidationSchema from "../validation";
const FormWizard = ({ initialValues, edittedValues, fields, validations, onSubmit }) => {
  const validationSchema = useMemo(() => {
    return Yup.object().shape(
      Object.fromEntries(
        Object.entries(validations).map(([field, value]) => [
          field,
          ValidationSchema(value[0], value[1]),
        ])
      )
    );
  }, [validations]);
  useEffect(() => {
    if (edittedValues) {
      Object.keys(initialValues).map((key) => {
        const opt = findSelectOption(fields, key)
        if (opt) {
          const val = checkSelectVal(opt.options, edittedValues[key])
          formik.setFieldValue(key, val);
        } else {
          formik.setFieldValue(key, edittedValues[key]);
        }
      })
    }
  }, [edittedValues])
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div className="flex gap-2">
      <form onSubmit={formik.handleSubmit} className="w-full">
        <FormBuilder config={fields} formik={formik} />
      </form>
    </div>
  );
};
const checkSelectVal = (options, option) => {
  const val = typeof option === 'string' ? options?.find(o => o.value === option) : option
  return val
}
const findSelectOption = (options, option) => {
  const opt = options.find(o => o.type === 'select' && o.name === option)
  return opt
}
export default FormWizard;
