const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');const bodyParser = require('body-parser');

const app = express();
mongoose.connect('mongodb://165.22.41.30:27017/mezy-db')
    .then(db => console.log('DB is connected'))
    .catch(err =>console.error(err));

// Settings
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json()); 

// Routes
app.use('/api', require('./src/routes/api'));

// Static files
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.sendFile('index.html');
});

// Server is listening
// app.listen(process.env.port || app.get('port'), () => {
//     console.log('Server on port', app.get('port'));
// })


app.listen(process.env.PORT || 5000);
