const express = require('express');
const app = express();

const path = require('path');

const db = require('./models/db');

const PORT = 3001;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// for css and js ->
app.use(express.static(path.join(__dirname, 'public')));

// for views->
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const authRouter = require('./routes/authRouter');

app.use('/auth', authRouter);

app.get('/del', (req, res)=>{
    db.deleteMany({}).then(()=>{
        console.log('Delted all');
        res.redirect('/auth/singup')
    }).catch((err)=>{
        console.log('Error Deleting All')
    });

})

app.get('/all', (req, res)=>{
    db.find().then((allUsers)=>{
        res.json(allUsers);
    }).catch((err)=>{
        res.send('Error fetching all the users');
    })
})

// app.get('/', (req, res)=>{
//     res.send(`<form action="/auth/login method="POST">
//         <button>login</button>
//     </form>`)
// })


app.listen(PORT, ()=>{
    console.log("Server is running on ", PORT);
})