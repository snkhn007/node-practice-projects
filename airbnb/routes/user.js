const path = require('path'); //for html files
const rootDir = require('../utils/pathUtils'); // for html path three


const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    //res.send(`<h2>Welcome to airbnb</h2>
    //<a href="/host/add-home">Add Home</a>`);
    // or->
    // res.sendFile(path.join(__dirname, '../', 'views', 'home.html'))
    // ie curr dir -> uske bahar -> views ke andr -> file name

    // or (using utils)->
    res.sendFile(path.join(rootDir, 'views', 'home.html'))
});


module.exports = router;