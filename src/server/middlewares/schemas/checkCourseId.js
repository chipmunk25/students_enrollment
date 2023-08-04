const { check } = require("express-validator")
const CourseIdSchema = [
    check('courseId').exists().isInt().withMessage('Course Id must be an integer'),
]
module.exports = CourseIdSchema