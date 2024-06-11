// Define Token middleware
module.exports = (req, res, next) => {
    console.log('Creating Token');
    req.token = true;
    next();
}

