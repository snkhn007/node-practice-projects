const express = require('express');
const userRouter = express.Router();


const path = require('path');

const userDetails = [];


userRouter.get('/', (req, res)=>{
    // without ejs ->
    // res.sendFile(path.join(__dirname, '../', 'views', 'user.html'));

    // with ejs ->
    res.render('user');
});
userRouter.post('/submit', (req, res)=>{
    // following PRG pattern

    // parsing before redirection
    userDetails.push({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        password: req.body.pass
    });
    // OR->
    // userDetails.push(req.body)
    
    // redirection
    res.redirect('/user/success');
});
userRouter.get('/success', (req, res)=>{
    // without ejs ->
    // res.sendFile(path.join(__dirname, '../', 'views', 'submit.html'))

    // with ejs->
    res.render('submit');
});

exports.userRouter = userRouter;

// exporting parsed data ->
exports.userDetails = userDetails; //will be imported by display