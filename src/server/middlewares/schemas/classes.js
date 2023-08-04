const { body } = require('express-validator')
function isGreaterThanZero(value) {
    return value > 0;
}
const classSchema = [
    body('className').exists().notEmpty().trim().withMessage('Class Name is Required'),
    body('maxClassSize').exists().notEmpty().withMessage('Max Class Size is Required').isInt().withMessage("Max Class Size should be an integer").custom(isGreaterThanZero).withMessage('Max Class Size must be greater than 0'),
];
module.exports = classSchema;
