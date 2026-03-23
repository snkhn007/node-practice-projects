exports.getData = (req, res)=>{
    // without ejs ->
    // res.sendFile(path.join(__dirname, '../', 'views', 'user.html'));

    // with ejs ->
    res.render('user');
};


const userDetails = [];


exports.processData = (req, res)=>{
    // following PRG pattern

    // parsing before redirection
    userDetails.push({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        password: req.body.pass
    });
    // OR->
    // userDetails.push(req.body)
    
    // redirection
    res.redirect('/user/success');
};


exports.successMsg = (req, res)=>{
    // without ejs ->
    // res.sendFile(path.join(__dirname, '../', 'views', 'submit.html'))

    // with ejs->
    res.render('submit');
}

exports.userDetails = userDetails;


// for display ->

exports.sendData = (req, res)=>{
    // res.send(userDetails); //data is succesfulluy received now

    // without ejs->
    // res.sendFile(path.join(__dirname, '../', 'views', 'display.html'));  
    console.log(userDetails);
    // with ejs->
    res.render('display', {userDetails : userDetails});
};
