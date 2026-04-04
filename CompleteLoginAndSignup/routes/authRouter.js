const express = require('express');
const router = express.Router();

const {postlogin, postsignup} = require('../controller/authController');
const {loginValidation, signupValidation} = require('../middleware/validation')

const {body, validationResult} = require('express-validator');

router.get('/login', (req, res)=>{
    res.render('login');
});

router.post('/login', loginValidation, postlogin);

router.get('/signup', (req, res)=>{
    res.render('signup');
});

router.post('/signup', signupValidation, postsignup);

module.exports = router;