import * as Yup from "yup";
import YupPassword from "yup-password";
// import parse from "date-fns/parse";
const FILE_SIZE = 2 * 1024 * 1024;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
YupPassword(Yup);




const requiredStringField = (field) =>
  Yup.string().required(`No ${field} provided`);

const requiredArrayField = (field) =>
  Yup.array().of(Yup.object().shape({
    label: Yup.string().required(`No ${field} provided`),
    value: Yup.string().required(`No ${field} provided`),
  }))
const requiredFileField = (field) =>
  Yup.mixed().required(`No ${field} provided`)
    .test('fileSize', 'Max allowed size is 2MB', value => value && value.size <= FILE_SIZE)
    .test('fileFormat', 'Not a valid image type', value => value && SUPPORTED_FORMATS.includes(value.type))
const requiredNumberField = (field) =>
  Yup.number().min(1).positive().required(`No ${field} provided`)
const requiredEmailField = (field) =>
  Yup.string().email("Invalid Email Address").required(`No ${field} provided`);
const requiredBooleanField = () =>
  Yup.bool().oneOf([true], "You must accept the terms and conditions.");
const requiredObjectField = (field) =>
  Yup.object().nullable().required(`No ${field} provided`);
const requiredDateField = () =>
  Yup.date().required("Date of Birth is required");
const passwordField = () =>
  requiredStringField("Password")
    .min(
      8,
      "Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number")
    .minSymbols(1, "Password must contain at least 1 special character");
const retypeField = (field, title) =>
  Yup.string().oneOf([Yup.ref(field), null], `${title} must match`);
const ChipValidationSchema = (type, field, title) => {
  switch (type) {
    case "string":
      return requiredStringField(field);
    case "image":
      return requiredFileField(field);
    case "array":
      return requiredArrayField(field);
    case "number":
      return requiredNumberField(field);
    case "email":
      return requiredEmailField(field);
    case "object":
      return requiredObjectField(field);
    case "password":
      return passwordField(field);
    case "date":
      return requiredDateField();
    case "retype":
      return retypeField(field, title);
    default:
      return requiredBooleanField(field);
  }
};
export default ChipValidationSchema;
