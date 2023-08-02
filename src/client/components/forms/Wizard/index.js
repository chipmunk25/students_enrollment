import React, { useMemo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormBuilder from "../builder";
import ValidationSchema from "../validation";
const FormWizard = ({ initialValues, fields, validations, onSubmit }) => {
  const validationSchema = useMemo(() => {
    return Yup.object().shape(
      Object.fromEntries(
        Object.entries(validations).map(([field, msg]) => [
          field,
          ValidationSchema(field, msg),
        ])
      )
    );
  }, [validations]);
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
export default FormWizard;
