const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const resolution = require('./routes/resolution.router.js');
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('build'));

// Express Routes

app.use('/resolutions', resolution);

// start server

app.listen( PORT, () => {
    console.log('Listening on port ', PORT);
});