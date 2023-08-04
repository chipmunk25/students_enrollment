const { check } = require("express-validator")

const IdSchema = [
    check('id').isInt().withMessage('Id must be an integer'),
]
module.exports = IdSchema