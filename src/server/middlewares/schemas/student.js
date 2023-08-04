const { body } = require('express-validator')
function isValidISO8601Date(value) {
    // Check if the value is a valid date in ISO-8601 format
    if (!value || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/.test(value)) {
        return false;
    }
    return !isNaN(new Date(value).getTime());
}
const studentSchema = [
    body('studentId').exists().notEmpty().trim().withMessage('Studen ID is Required'),
    body('name').exists().notEmpty().trim().withMessage('Name is Required'),
    body('dateOfBirth').exists().notEmpty().withMessage('Date of Birth is Required').isDate().withMessage('Invalid Date of Birth'),
    body('gender').exists().notEmpty().trim().withMessage('Gender is Required').matches(/^(male|female)$/i).withMessage('Invalid gender'),
    // body('photograph').exists().notEmpty().trim().withMessage('photograph is Required'),
    body('residency').exists().notEmpty().trim().withMessage('residency is Required').matches(/^(on_campus|off_campus)$/i).withMessage('Invalid Residency'),
    body('status').exists().notEmpty().trim().withMessage('status is Required').matches(/^(regular|foreign|fee_paying|distance)$/i).withMessage('Invalid Status'),
];
module.exports = studentSchema;
