const express = require('express');
const app = express();
// for files ->
const path = require('path');

// for ejs->
app.set('view engine', 'ejs');
app.set('views', 'views');

// for parsing ->
app.use(express.urlencoded({extended:false}));


// for static serving of css and js ->
app.use(express.static(path.join(__dirname,'public')));

const {userRouter} = require('./routes/user');
const {displayRouter} = require('./routes/display');

app.use('/user', userRouter);
app.use('/display', displayRouter);


const{errorController} = require('./controller/error')
app.use(errorController);
app.listen(3000, ()=>{
    console.log('Started.....')
})
