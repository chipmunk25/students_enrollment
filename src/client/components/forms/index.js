import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormBuilder from "./builder";
import ValidationSchema from "./validation";
import Constant from "../../utils/constant";
import { Eye16Filled } from "@fluentui/react-icons";
import useThemeStore from "../../hooks/zustand/useTheme";
const defaultCheckedValue = "MALE";
const FormWizard = ({ initials, fields, validations, }) => {
  const theme = useThemeStore((state) => state);
  const validationSchema = Yup.object().shape({
    email: ValidationSchema("email", "Email"),
    password: ValidationSchema("password", "Password"),
    username: ValidationSchema("string", "Username"),
    firstname: ValidationSchema("string", "Firstname"),
    sex: ValidationSchema("string", "Sex"),
    role: ValidationSchema("object", "Role"),
    retypePwd: ValidationSchema("retype", "password", "Password"),
    condition: ValidationSchema(),
    dob: ValidationSchema("object", "Valid Date"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      role: null,
      email: "",
      password: "",
      address: "",
      dob: "",
      condition: false,
      retypePwd: "",
      sex: defaultCheckedValue,
      photo: undefined,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const formFields = [
    {
      type: Constant.TEXT,
      name: "username",
      label: "User's name",
      placeholder: "Enter Username",
      autoFocus: true,
      required: true,
    },
    {
      type: Constant.TEXT,
      name: "firstname",
      label: "Firstname",
      placeholder: "Enter Firstname",
    },
    {
      type: Constant.TEXT,
      name: "lastname",
      label: "Lastname",
      placeholder: "Enter lastname",
    },
    {
      type: Constant.EMAIL,
      name: "email",
      label: "Email",
      placeholder: "Enter email",
    },
    {
      type: Constant.PASSWORD,
      name: "password",
      label: "Password",
      placeholder: "Enter Password",
    },
    {
      type: Constant.PASSWORD,
      name: "retypePwd",
      label: "Retype Password",
      placeholder: "Enter Password",
    },
    {
      type: Constant.SELECT,
      name: "role",
      label: "Role",
      placeholder: "Select Role",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
    {
      type: Constant.TEXTAREA,
      name: "address",
      label: "Address",
      placeholder: "Enter Address",
    },
    {
      type: Constant.DATE,
      name: "dob",
      label: "Date of Birth",
      placeholder: "Enter Date of Birth",
    },
    {
      type: Constant.RANGE,
      name: "eventDate",
      label: "Date of Events",
      placeholder: "Enter Date of Events",
    },
    {
      type: Constant.RADIO,
      name: "sex",
      label: "Sex",
      defaultCheckedValue,
      items: [
        {
          name: "MALE",
          label: "Male",
          value: "MALE",
        },
        {
          name: "FEMALE",
          label: "Female",
          value: "FEMALE",
        },
        {
          name: "NONBINARY",
          label: "Non - Binary",
          value: "NONBINARY",
        },
      ],
    },
    {
      type: Constant.CHECKBOX,
      name: "condition",
      label: "I agree to the Terms and Conditions",
    },
    {
      type: Constant.UPLOAD,
      name: "photo",
      label: "Select the File(s)",
    },
    {
      type: Constant.BUTTON,
      primary: true,
      position: "left",
      title: "Submit",
      icon: <Eye16Filled className=" inline-block  align-middle w-24 h-24" />,
      fluid: true,
      // disabled
    },
  ];
  return (
    <div className="flex gap-2">
      <form onSubmit={formik.handleSubmit} className="w-full">
        <FormBuilder
          size={theme.size}
          config={formFields}
          formik={formik}
          inline={theme.orientation}
          border={theme.border}
          borderColor={`border-${theme.color}-${theme.weight}`}
        />
      </form>
    </div>
  );
};
export default FormWizard;
