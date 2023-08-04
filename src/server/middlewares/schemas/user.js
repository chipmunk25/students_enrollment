const { body } = require('express-validator')
const userSchema = [
    body('email').exists().notEmpty().trim().withMessage('Email is Required').isEmail().withMessage("Invalid Email"),
    body('password').exists().notEmpty().withMessage('Password is Required').isStrongPassword().withMessage("Password must be strong"),
];
module.exports = userSchema;
