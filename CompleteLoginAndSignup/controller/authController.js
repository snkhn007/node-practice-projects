const {body, validationResult} = require('express-validator');

const db = require('../models/db')
exports.postlogin = (req, res)=>{
    console.log(req.body);

    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.send(err.array());
    }

    const {mail, pass} = req.body;
    db.findOne({mail:mail}).then((user)=>{
        if(!user){
            return res.send('User Does not exist, Sign In first..')
        }
        // user found->
        // checking if pass entered is equal to pass in db or not
        if(pass === user.password){
            return res.status(200).send('Sucessfully Logged In');
        } 
        else{
            return res.status(401).send('Incorrect Password');
        }
    }).catch((err)=>{
        console.log('Login Error: ', err);
        return res.status(500).send('Server error during login')
    })
}

exports.postsignup = (req, res)=>{
    console.log(req.body);    

    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.send(err.array());
    }

    const{name, mail, pass} = req.body;

    db.findOne({mail:mail}).then((user)=>{
        if(user){
            return res.send({ message: "User already exists, Do Log in" });
        }
        return db.create(
            {
                name: name,
                mail: mail,
                password: pass
            }
        ).then((newUser)=>{
            console.log('Created User with details: ', newUser);
            res.send('Created User');
        }).catch((err)=>{
            console.log("Error Creating user: ", err);
            res.send(`Error creating user ${err}`);
        })
    })
};