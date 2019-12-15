const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Require TTT route
require('./app/routes/ttt.route.js')(app);

// Require for CSS and static data
app.use(express.static(path.join(__dirname, '/templates/static')));

// define a simple route
app.get('/', (req, res) => {
    //res.json({"message": "Welcome to TTT solution!"});
    res.sendFile(path.join(__dirname+'/templates/index.html'));
});

// listen for requests
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});