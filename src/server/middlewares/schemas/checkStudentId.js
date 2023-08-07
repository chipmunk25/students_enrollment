const { check } = require("express-validator")
const StudentIdSchema = [
    check('studentId').exists().isInt().withMessage('Student Id must be an integer'),
]
module.exports = StudentIdSchema