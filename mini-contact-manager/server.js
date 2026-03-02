/*
Problem Statement:

Build a mini Contact Manager using Express.js.

The application should:

1. Display a Home Page with navigation links.
2. Provide a form to add new contacts (name and surname).
3. Handle form submission using POST request.
4. Store submitted contacts in an in-memory array.
5. Display all added contacts on a separate route.
6. Use middleware to parse incoming form data.

Note:
- No database is used.
- Contacts are stored temporarily while the server is running.
*/
const express = require('express');
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));

app.get('/', (req, res)=>{
    res.send(`<h2>Home Page</h2>
    <a href="/add-contact">Add Contacts</a><br>
    <a href="/view-contact">View Contacts</a>`);
})

app.get('/add-contact', (req, res)=>{
    res.send(`<form action="/submit" method="POST">
        <label>
            <input type="text" name="name" id="name" placeholder="Enter name">
        </label>
        <br><br>
        <label>
            <input type="text" name="surname" id="surname" placeholder="Enter surname">
        </label>
        <br><br>

        <button type="submit">Submit</button>
    </form>`);
});

const contacts = []; // array of objects -> [{sana:khan}, {saniya:khan}....] 
app.post('/submit', (req, res)=>{
    contacts.push({name :req.body.name,  surname: req.body.surname});
    res.send(`<h3>submitted</h3>
    <a href="/">Home</a>`);
})

app.get('/view-contact', (req, res)=>{
    let i = 1, output ='';
    for(const contact of contacts){
        output += `${i}. ${contact.name} ${contact.surname} <br>`;
        i++;
    }
    res.send(`<h3>view Contact page</h3>
    <p>${output}</p>`);
})


app.listen(3000, ()=>{
    console.log('Started...')
})