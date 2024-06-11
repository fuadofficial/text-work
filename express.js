
const express = require('express');
const app = express();
const Token = require('./middleware/token')
const Validation = require('./middleware/validation')

app.use(DateGenerator)

const middleware = [Token, Validation]

// Use Token middleware in your route handler
app.get('/profile', middleware, (req, res) => {
    console.log('user logged');
    res.send('<h1>Succrss<h1>'); // You had a typo here, 'helo' should be 'hello'
});
app.get('/', (req, res) => {
    console.log('Default URL');
    res.send('<h1>Home Page<h1>'); // You had a typo here, 'helo' should be 'hello'
});

function DateGenerator(req, res, next) {
    console.log(new Date());
    next()
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
