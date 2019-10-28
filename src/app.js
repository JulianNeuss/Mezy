const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mezy-database')
    .then(db => console.log('DB is connected'))
    .catch(err =>console.error(err));

// Settings
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/spi', require('./routes/api'));

// Static files
app.use(express.static(__dirname + '/public'));

// Server is listening
app.listen(process.env.port || app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})