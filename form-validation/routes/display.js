const express = require('express');
const displayRouter = express.Router();

const path = require('path');

// getting parsed data from userDetails.js -> 
const {userDetails} = require('../controller/homes');
console.log(userDetails);

const{sendData} = require('../controller/homes')
displayRouter.get('/', sendData);

exports.displayRouter = displayRouter;