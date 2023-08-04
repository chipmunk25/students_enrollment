const { body } = require('express-validator')
function isGreaterThanZero(value) {
    return value > 0;
}
function isValidISO8601Date(value) {
    // Check if the value is a valid date in ISO-8601 format
    if (!value || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/.test(value)) {
        return false;
    }
    return !isNaN(new Date(value).getTime());
}
const courseSchema = [
    body('courseName').exists().notEmpty().trim().withMessage('Course Name is Required'),
    body('startDate').exists().notEmpty().withMessage('Start Date is Required').isDate().withMessage('Invalid Start Date'),
    body('duration').exists().notEmpty().withMessage('Duration is Required').isInt().withMessage("Duration should be an integer").custom(isGreaterThanZero).withMessage('Duration must be greater than 0')
];
module.exports = courseSchema;
