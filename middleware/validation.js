module.exports = (req, res, next) => {
    if (req.token) {
        console.log(' Token Approved');
        next();
    } else {
        console.log('Token is not Approved');
        res.send('<h1>NOT TOKEN<h1>')
    }
}

