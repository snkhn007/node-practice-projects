const path = require('path');
const rootDir = require('../utils/pathUtils');

const express = require('express');
const router = express.Router();

router.get('/add-home',(req, res)=>{
    // res.send(`<h2>Register yout home here: </h2>
    // <form action="/host/add-home" method="POST">
    //     <label>
    //         <input type="text" name="name" id="name" placeholder="Enter house name: ">
    //     </label>
    //     <button type="submit">Submit</button>
    // </form>`)

    res.sendFile(path.join(__dirname, '../', 'views', 'addHome.html'))
});

router.post('/add-home',(req, res)=>{
    console.log(req.body);
    // res.send(`<h2>Home registered sucessfully</h2>
    // <a href="/">Go to Home</a>`)
    // res.sendFile(path.join(__dirname, '../', 'views', 'homeAdded.html'))

    // or (using utils) ->
    res.sendFile(path.join(rootDir,  'views', 'homeAdded.html'))
});

module.exports = router;