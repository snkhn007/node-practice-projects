exports.errorController = (req, res)=>{
    // without ejs->
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

    // with ejs->
    res.status(404).render('404');
};