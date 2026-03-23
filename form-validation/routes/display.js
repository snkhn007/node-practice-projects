const express = require('express');
const displayRouter = express.Router();

const path = require('path');

// getting parsed data from userDetails.js -> 
const {userDetails} = require('./user');
console.log(userDetails);
displayRouter.get('/', (req, res)=>{
    // res.send(userDetails); //data is succesfulluy received now

    // without ejs->
    // res.sendFile(path.join(__dirname, '../', 'views', 'display.html'));  
    console.log(userDetails);
    // with ejs->
    res.render('display', {userDetails : userDetails});
});

exports.displayRouter = displayRouter;