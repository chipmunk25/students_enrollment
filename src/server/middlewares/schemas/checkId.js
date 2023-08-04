const { check } = require("express-validator")
const IdSchema = [
    check('id').exists().isInt().withMessage('Id must be an integer'),
]
module.exports = IdSchema