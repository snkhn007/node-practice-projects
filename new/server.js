// 2 middleware that log method + url ✅
// Home route / ✅
// “Contact us” route that returns a form ✅
// POST handler for the same path ✅

const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log(req.method);
    next();
});

app.use((req, res, next)=>{
    console.log(req.url);
    next();
});

// app.use((req, res, next)=>{
//     res.send('Respond sent...');
// });

app.get('/', (req, res, next)=>{
    res.send('this is Home Page');
});

app.get('/contact', (req, res, next)=>{
    res.send(`<form action="/contact"  method="POST">
        <label >
            <input type="text" name="name" id="name" placeholder="Enter name: ">
        </label>
        <button type="submit">Submit</button>
    </form>`);
});

app.post('/contact', (req, res, next)=>{
    res.send('Submitted');
})


app.listen(3000, ()=>{
    console.log('Listening......');
})