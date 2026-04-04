const {body, validationResult} = require('express-validator');

exports.loginValidation = [
    body('mail')
    .isEmail()
    .withMessage('Invalid Email'),
    body('pass')
    .isLength({min:6})
    .withMessage('Password too Short')
]

exports.signupValidation = [
    body('name').isLength({min:5}).withMessage('Name too Short'),
    body('mail').isEmail().withMessage('Invalid Mail'),
    body('pass').isLength({min:6}).withMessage('Password too Short')
]