const path = require('path');
const rootDir = require('./utils/pathUtils'); // for html path three

const express = require('express');
const app = express();

// routes ->
const userRouter = require('./routes/user');
const hostRouter = require('./routes/host');


// app.use((req, res, next)=>{ 
//     console.log(req.url, req.method);
//     next();
// });

app.use(express.urlencoded({ extended: false })); // inplace of body parser!!


app.use(userRouter);
// app.use(hostRouter); // if inside host router we used /host/add-home routes

app.use('/host', hostRouter);


// used in end (*)
// invalid path ->
app.use((req, res, next)=>{
    // res.status(404).send(`<h2>404 - your page is not found on airbnb</h2>`);
    // res.status(404).sendFile(path.join(__dirname,  'views', '404.html'))
    // no need for ../  kyuki hame isse bahar wale folder me ni jaana
    
    
    // or (using utils) ->
    res.status(404).sendFile(path.join(rootDir,  'views', '404.html'))


})


app.listen(3000, ()=>{
    console.log('Started...');
});