const express = require('express');
const userRouter = express.Router();


const path = require('path');

// const userDetails = [];

const {getData} = require('../controller/homes');
userRouter.get('/', getData);
const {processData} = require('../controller/homes');
userRouter.post('/submit', processData);
const {successMsg} = require('../controller/homes');
userRouter.get('/success', successMsg);

exports.userRouter = userRouter;

// exporting parsed data ->
// exports.userDetails = userDetails; //will be imported by display