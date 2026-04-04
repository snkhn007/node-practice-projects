const {body, validationResult} = require('express-validator');

exports.postlogin = (req, res)=>{
    console.log(req.body);

    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.send(err.array());
    }
    res.send('login in page');
}

exports.postsignup = (req, res)=>{
    console.log(req.body);
    
    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.send(err.array());
    }
    res.send('signup in page');
};