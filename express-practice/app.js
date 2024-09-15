const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false})); // this is to parse form data
// parsing form data means that we can access the form data in the request object
// extended: false means that we are not going to be dealing with any complex objects
// body-parser is a package that is used to parse form data but it is now included in express
// we can also use express.json() to parse json data4
app.use(express.json()); // this is to parse json data

app.use('/api/people', people); // we are using the people router, our base url is /api/people
app.use('/login', auth); // we are using the login router, our base url is /login

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});